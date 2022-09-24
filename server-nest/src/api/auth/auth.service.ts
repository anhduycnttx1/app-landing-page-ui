import { LoginDto } from './dto/login.dto'
import { UsersService } from './../shared/users/users.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { RegisterDto } from './dto/register.dto'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async getTokens(userId: string, email: string) {
    const accessToken = await this.jwtService.signAsync(
      {
        sub: userId,
        email: email,
      },
      {
        expiresIn: 60 * 10,
        secret: 'at-secret',
      }
    )
    const refreshToken = await this.jwtService.signAsync(
      {
        sub: userId,
        email: email,
      },
      {
        expiresIn: 60 * 60 * 24 * 7,
        secret: 'rt-secret',
      }
    )
    return { accessToken, refreshToken }
  }

  async register(registerDto: RegisterDto): Promise<any> {
    return await this.userService.create(registerDto)
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto
    const user = await this.userService.findOne(email)
    if (!user) throw new HttpException('This email/password not found', HttpStatus.BAD_REQUEST)
    const hashMatches = await argon2.verify(user.hash, password)
    if (!hashMatches) throw new HttpException('This email/password not found', HttpStatus.BAD_REQUEST)
    const tokens = await this.getTokens(user.id, user.email)
    await this.updateRtHash(user.id, tokens.refreshToken)
    return tokens
  }
  async logout(userId: string): Promise<any> {
    await this.userService.update(userId, { hashRt: null })
  }
  async updateRtHash(userId: string, rt: string) {
    const rtHash = await argon2.hash(rt)
    await this.userService.update(userId, { hashRt: rtHash })
  }
}

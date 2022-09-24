import { Controller, Post, UseGuards, Body, Res, HttpCode, HttpStatus, HttpException } from '@nestjs/common'
import { Request } from 'express'
import { LoginDto } from './dto/login.dto'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { AuthGuard } from '@nestjs/passport'
import { Req } from '@nestjs/common/decorators'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto): Promise<any> {
    const userNew = await this.authService.register(registerDto)
    return { message: `Create successfuly user with id : ${userNew._id}` }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto): Promise<any> {
    const data = await this.authService.login(loginDto)
    return data
  }

  @Post('logout')
  @UseGuards(AuthGuard('at-jwt'))
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request) {
    console.log(req)
    const user = req.user
    return await this.authService.logout(user['sub'])
  }
}

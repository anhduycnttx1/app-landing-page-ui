import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

type JwtPayload = {
  sub: string
  email: string
}
@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'at-jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'at-secret',
      passReqToCallback: true,
    })
  }

  async validate(payload: JwtPayload) {
    return payload
  }
}

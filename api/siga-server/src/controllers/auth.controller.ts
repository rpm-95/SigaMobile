// import { Controller, UseGuards, Request, Post } from '@nestjs/common';
// import { AuthService } from '../services/auth/auth.service';
// import { LocalAuthGuard } from '../services/auth/local-auth.guard';
// @Controller()
// export class AuthController {

//     constructor(
//         private authService: AuthService,
//     ) { }

//     @UseGuards(LocalAuthGuard)
//     @Post('login-siga')
//     async login(@Request() req: any){
//         return this.authService.login(req.user);
//     }
// }

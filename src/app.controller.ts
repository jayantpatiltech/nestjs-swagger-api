import { Controller, Delete, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
// import { request } from 'http';
import { type } from 'os';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
// import { AuthService } from './auth/auth.service';

// @ApiTags('Test')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}
public jwtToken = {access_token: ''}; 
@UseGuards(AuthGuard('local'))
@Post('auth/login')
async login (@Req() req) {
    return this.authService.login(req.user);
}


@UseGuards(AuthGuard('google'))
@Get('google')
async google() {}


@UseGuards(AuthGuard('google'))
@Get('auth/google/callback')
async googleCallback(@Req() req, @Res() res: Response) {
  // return req.user;
  // return this.authService.login(req.user);
  // console.log(req.user);
  const jwt = await this.authService.login(req.user);
  this.jwtToken = jwt;
  res.set('authorization', jwt.access_token);
  res.status(200);
  return res.json(req.user);
  // res.redirect('/profile', )
}



@UseGuards(AuthGuard('google'))
@Get('home')
async getHome(@Req() req, @Res() res: Response) {
  // console.log('token--->>',this.jwtToken.access_token)
  if(this.jwtToken.access_token) {
    res.json({data: {}})
  } else {
    res.json({})
  }
}

// need more research
@Get('logout')
async logout(@Req() req, @Res() res) {
  const jwt = await this.authService.login('');
  this.jwtToken = jwt;
  return 'successfully logout'
}


@UseGuards(AuthGuard('google'))
@Get('google')
async Google(@Req() req) {}

@Get('auth/google/callback')
@UseGuards(AuthGuard('google'))
async callback(@Req() req, @Res() res) {
  console.log('done')
  res.json(req.user);
}


  @Get('/')
  // @ApiOperation({summary: 'default get app'})
  // @ApiResponse({
  //   status: 200,
  //   description: 'Success',
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       data: {
  //         type: 'string',
  //         example: 'logged in ...',
  //         description: 'login success'
  //       }
  //     }
  //   }
  // })
  getHello(): string {
    return this.appService.getHello();
  }

//   @Post('/save')
//   @ApiOperation({
//     summary: 'create product'
//   })
//   @ApiParam({
//         name: 'id',
//         required: true,
//         description: 'enter your id',
//         type: 'integer'
//   })
//   @ApiParam({
//     name: 'name',
//     required: true,
//     description: 'enter your name',
//     type: 'string'
// })
// @ApiResponse({status: 403, description: 'Forbidden'})
// @ApiResponse({
//   status: 201,
//   description: 'success',
//   schema: {
//     type: 'object',
//     properties: {
//       data: {
//         type: 'string',
//         example: 'saved',
//         description: 'success message'

//       }
//     }
//   }
// })
//   save(@Req() request: Request, @Res() response: Response) {
//     response.send('saved');
//   }

//   @Delete('/delete')
//   @ApiOperation({summary: 'Delete product'})
//   @ApiParam({
//     name: 'id',
//     required: true,
//     description: '',
//     type: 'integer'
//   })
//   @ApiQuery({
//     name: 'name',
//     required: true,
//     description: 'test',
//     type: 'string'
//   })
//   delete(): string {
//     return 'deleted....'
//   }

//   @Put('/update/:id')
//   @ApiOperation({summary: 'Update the record'})
//   @ApiQuery({
//     name: 'id',
//     required: true,
//     description: 'id',
//     type: 'integer'
//   })
  
//   @ApiBody({
//     schema: {
//       type: 'object',
//       properties: {
//         id: {
//           type: 'integer',
//           description: 'id',
//           example: 10,
//           required: ['true']
//         },
//         name: {
//           type: 'string',
//           description: 'test',
//           example: 'test'
//         }
//       }
//     }
//   })
//   update(): string {
//     return 'updated...'
//   }
}
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
// import { TestInterceptor } from 'src/test.interceptor';
// @ApiTags('login')
@Controller('login')
export class LoginController {
    
    @Get()
    // @UseInterceptors(new TestInterceptor())
    // @ApiOperation({summary: "GET Login Test"})
    // @ApiResponse({status: 403, description: "forbidden"})
    // @ApiResponse({status: 200, description: 'successfully logged in...', type:'application/text',
    // schema:{
    //     type: 'object',
    //     properties: {
    //         // data: {
    //         //     type: 'string',
    //         //     example: 'Logged in...',
    //         //     description: 'This is is message from server'
    //         // }
    //         data: {
    //             type: 'array',
    //             items: {
    //                 type: 'object',
    //                 properties: {
    //                     id: {
    //                         type: 'integer',
    //                         example: 0,
    //                         description: 'This is iD'
    //                         },
    //                     name: {
    //                         type: 'string',
    //                         example: 'Test',
    //                         description: 'This will be the name'
    //                     }
    //                 }
    //             }
            
    //             }
    //         }
    // }})
    login(): string {
        return 'Logged in...'
    } 
}

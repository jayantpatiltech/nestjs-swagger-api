import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('Test Module')
@Controller('test')
export class TestController {

    @Get('/getAll')
    @ApiOperation({summary: 'Get all data from this api'})
    @ApiResponse({
        status: 200,
        description: 'All Data list', schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        description: 'this is unique id',
                        example: '100'
                    },
                    name: {
                        type: 'string',
                        description: 'this is the name',
                        example: 'Test'
                    }
                }
            }
        }
    })
    @ApiResponse({
        status: 403,
        description: 'Fobidden'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal server error'
    })
    
    getAll(): string {
        return 'All Data list'
    }

    @Post('/create')
    @ApiOperation({ summary: 'create new record'})
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    example: 5,
                    description: 'this is unique id',
                },
                name: {
                    type: 'string',
                    example: 'test',
                    description: 'this is the name'
                }
            }
        }
    })
    @ApiResponse({
        status: 201,
        description: 'saved...'
    })
    @ApiResponse({
        status: 403,
        description: 'Fobidden'
    })
    save(): string {
        return 'saved...'
    }

    @Put('/update/:id')
    @ApiOperation({summary: 'update the record'})
    @ApiParam({
        name: 'id',
        type: 'integer',
        description: 'enter unique id',
        required: true
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    example: 5,
                    description: 'this is unique id',
                },
                name: {
                    type: 'string',
                    example: 'test',
                    description: 'this is the name'
                }
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'updated successfully'
    })
    @ApiResponse({
        status: 403,
        description: 'Fobidden'
    })
    update(@Req() request: Request): string {
        console.log(request.params);
        return 'updated...'
    }

    @Delete('/delete')
    @ApiOperation({summary: 'delete the record'})
    @ApiParam({
        name: 'id',
        type: 'integer',
        description: 'enter unique id',
        required: true
    })
    @ApiResponse({
        status: 200,
        description: 'deleted the record'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden'
    })
    delete(): string {
        return 'deleted...'
    }
}

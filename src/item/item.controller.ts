import {Controller, Get, Post, Put, Delete, Body, Req, Res} from '@nestjs/common';
import {CreateDto} from './dto/create.dto';
import {Request, Response} from 'express';

@Controller('item')
export class ItemController {
    @Get()
    findAll(@Req() req: Request, @Res() res: Response): Response {
        return res.send(req.url);
    }
    @Post()
    create(@Body() createItem: CreateDto): string {
        return `This action adds an item: ${createItem.name}`;
    }
    @Get(':id')
    findOne(id: string): string {
        return `This action returns a #${id} item`;
    }
    @Put(':id')
    update(id: string): string {
        return `This action updates a #${id} item`;
    }
    @Delete(':id')
    remove(id: string): string {
        return `This action removes a #${id} item`;
    }
}

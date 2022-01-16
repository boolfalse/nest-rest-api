import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {CreateDto} from './dto/create.dto';

@Controller('item')
export class ItemController {
    @Get()
    findAll(): string {
        return 'This action returns all items';
    }
    @Post()
    create(@Body() createItem: CreateDto): string {
        return `This action adds an item ${createItem.name}`;
    }
    @Get(':id')
    findOne(@Param() param): string {
        return `This action returns a #${param.id} item`;
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

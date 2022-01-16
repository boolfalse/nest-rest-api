import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import {CreateDto} from './dto/create.dto';
import {UpdateDto} from './dto/update.dto';
import {ItemService} from './item.service';
import {Item} from './interfaces/item.interface';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}
    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }
    @Post()
    create(@Body() createItem: CreateDto): Promise<Item> {
        return this.itemService.create(createItem);
    }
    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemService.findOne(id);
    }
    @Put(':id')
    update(@Body() updateItem: UpdateDto, @Param('id') id): Promise<Item> {
        return this.itemService.update(id, updateItem);
    }
    @Delete(':id')
    remove(@Param('id') id): Promise<Item> {
        return this.itemService.remove(id);
    }
}

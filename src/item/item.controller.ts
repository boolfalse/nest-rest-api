import {Controller, Get, Post, Put, Delete} from '@nestjs/common';

@Controller('item')
export class ItemController {
    @Get()
    findAll(): string {
        return 'This action returns all items';
    }
    @Post()
    create(): string {
        return 'This action adds an item';
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

import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

    async findAll(): Promise<Item[]> {
        return this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return this.itemModel.findOne({_id: id});
    }

    async create(item: Item): Promise<Item> {
        return await new this.itemModel(item).save();
    }

    async update(id: string, item: Item): Promise<Item> {
        return this.itemModel.findByIdAndUpdate(id, item, {
            new: true // if there isn't one already, create a new one
        });
    }

    async remove(id: string): Promise<Item> {
        return this.itemModel.findByIdAndRemove(id);
    }
}

import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemService {
    private readonly items: Item[] = [
        {
            id: '11111111',
            name: "Item 1",
            description: "Item 1 description",
            qty: 100,
        },
        {
            id: '22222222',
            name: "Item 2",
            description: "Item 2 description",
            qty: 200,
        },
        {
            id: '33333333',
            name: "Item 3",
            description: "Item 3 description",
            qty: 300,
        },
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }

    create(item: Item): Item {
        this.items.push(item);
        return item;
    }

    update(id: string, item: Item): Item {
        const index = this.items.findIndex(i => i.id === id);
        this.items[index] = item;
        return item;
    }

    remove(id: string): Item {
        const index = this.items.findIndex(i => i.id === id);
        const deletedItem = this.items[index];
        this.items.splice(index, 1);
        return deletedItem;
    }
}

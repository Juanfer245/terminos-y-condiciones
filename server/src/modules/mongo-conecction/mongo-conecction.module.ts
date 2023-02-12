import { Module } from '@nestjs/common';
import { MongoConnectionService } from './mongo-conecction.service';

@Module({ 
    providers:[
        MongoConnectionService
    ],
    exports:[
        MongoConnectionService
    ]
})
export class MongooseConnectionModule{}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {} // injeta no mongoDB

    async findUser(username: string) {
        return this.userModel.findOne({ 'username': username }).exec();
    }
}
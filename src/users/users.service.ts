import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model <UserDocument> ) {}

  async create(createUserDto: CreateUserDto): Promise <UserDocument> {
    const user = new this.userModel(createUserDto);
    return user.save();
  }
  

  async findAll(): Promise <User[]> {
    return await this.userModel.find({ isDeleted: false });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, user: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }
}

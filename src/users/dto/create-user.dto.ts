import { IsBoolean, IsNotEmpty } from 'class-validator';
import { User as UserInterface } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: "Name can not be empty"})
  name: string;

  // @IsNotEmpty({ message: "Please check the box"})
  @IsBoolean({ message: "isChecked cannot be anything other than boolean"})
  isChecked: boolean;
 
  // @IsNotEmpty({ message: "Please add isDelete"})
  @IsBoolean({ message: "isDeleted cannot be anything other than boolean"})
  isDeleted: boolean;
};

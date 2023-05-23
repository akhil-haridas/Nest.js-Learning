import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  private users = [{ id: 1, name: "AKHIL", place: "PALAKKAD" }]
  
  create(createUserDto: CreateUserDto) {
    this.users.push(createUserDto)
    return `This action adds a new user`;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user=> user.id === id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let objINDEX = this.users.findIndex((user) => user.id === id)
    this.users[objINDEX] = updateUserDto
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.users = this.users.filter((user)=> user.id !== id)
    return `This action removes a #${id} user`;
  }
}

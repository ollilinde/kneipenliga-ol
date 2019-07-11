import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['email', 'name', 'surname', 'isAdmin'],
    });
  }

  async getUser(_id: number): Promise<User> {
    const user = await this.usersRepository.find({
      select: ['id', 'email', 'name', 'surname', 'isAdmin'],
      relations: ['team'],
      where: { id: _id },
    });
    if (user.length === 1) {
      return user[0];
    }
    throw new NotFoundException('User not found');
  }

  async getUserPasswordHashByEmail(_email: string) {
    return await this.usersRepository.findOne({
      select: ['id', 'passwordHash'],
      where: [{ email: _email }],
    });
  }

  async createUser(user: User) {
    let u = this.usersRepository.create(user);
    this.usersRepository.save(u);
  }

  async updateUser(user: User) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: User) {
    this.usersRepository.delete(user);
  }

  async validateUser(payload: { userId: string }): Promise<any> {
    return await this.usersRepository.findOne(payload.userId);
  }
}

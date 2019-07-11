import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  BadRequestException,
  UnauthorizedException,
  UseGuards,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { RegisterUserDto } from './register.dto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { IsAdminGuard } from '../guards/isAdmin.guard';

@Controller('users')
export class UsersController {
  constructor(
    private service: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  @UseGuards(AuthGuard())
  getAll() {
    return this.service.getUsers();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() user: User) {
    return this.service.createUser(user);
  }

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    const existing = await this.service.getUserPasswordHashByEmail(
      registerUserDto.email,
    );
    if (registerUserDto.password !== registerUserDto.passwordRepeat || existing)
      throw new BadRequestException('Passwords must be the same!');

    const activationToken = randomStringGenerator().substring(0, 8);
    const passwordHash = await this.getHash(registerUserDto.password);

    let user: User = new User();
    user.email = registerUserDto.email;
    user.name = registerUserDto.name;
    user.surname = registerUserDto.surname;
    user.activationToken = activationToken;
    user.passwordHash = passwordHash;

    return await this.service.createUser(user);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const userLogin = await this.service.getUserPasswordHashByEmail(
      loginUserDto.email,
    );
    if (!userLogin) throw new UnauthorizedException('Invalid Data');
    const correctPW = await this.compareHash(
      loginUserDto.password,
      userLogin.passwordHash,
    );
    if (!correctPW) throw new UnauthorizedException('Invalid Data');

    const token = await this.jwtService.sign(
      { userId: userLogin.id },
      { expiresIn: '7d' },
    );

    const user = await this.service.getUser(userLogin.id);

    return { jwt: token, user };
  }

  @Put()
  @UseGuards(AuthGuard())
  update(@Body() user: User) {
    return this.service.updateUser(user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard(), IsAdminGuard)
  deleteUser(@Param() params) {
    return this.service.deleteUser(params.id);
  }

  private async getHash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async compareHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}

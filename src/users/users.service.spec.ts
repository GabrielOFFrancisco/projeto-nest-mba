import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    service.removeAll();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a user successfully', () => {
    const createUserDto: CreateUserDto = {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
    };

    const user = service.create(createUserDto);

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.nome).toBe(createUserDto.nome);
    expect(user.email).toBe(createUserDto.email);
  });

  it('should throw ConflictException when email already exists', () => {
    const createUserDto: CreateUserDto = {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
    };

    service.create(createUserDto);

    expect(() => service.create(createUserDto)).toThrow(ConflictException);
  });

  it('should return all users', () => {
    const createUserDto1: CreateUserDto = {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
    };
    const createUserDto2: CreateUserDto = {
      nome: 'Maria Santos',
      email: 'maria@exemplo.com',
    };

    service.create(createUserDto1);
    service.create(createUserDto2);

    const users = service.findAll();
    expect(users).toHaveLength(2);
  });

  it('should find a user by id', () => {
    const createUserDto: CreateUserDto = {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
    };

    const createdUser = service.create(createUserDto);
    const foundUser = service.findOne(createdUser.id);

    expect(foundUser).toEqual(createdUser);
  });

  it('should throw NotFoundException when user not found', () => {
    expect(() => service.findOne('non-existent-id')).toThrow(NotFoundException);
  });
  it('should update a user successfully', () => {
    const createUserDto: CreateUserDto = {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
    };

    const createdUser = service.create(createUserDto);

    const updateUserDto: UpdateUserDto = {
      nome: 'João Santos',
    };

    const updatedUser = service.update(createdUser.id, updateUserDto);

    expect(updatedUser.nome).toBe(updateUserDto.nome);
    expect(updatedUser.email).toBe(createdUser.email);
  });
  it('should remove a user successfully', () => {
    const createUserDto: CreateUserDto = {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
    };

    const createdUser = service.create(createUserDto);

    expect(() => service.remove(createdUser.id)).not.toThrow();
    expect(() => service.findOne(createdUser.id)).toThrow(NotFoundException);
  });

  it('should throw NotFoundException when removing non-existent user', () => {
    expect(() => service.remove('non-existent-id')).toThrow(NotFoundException);
  });

  it('should throw ConflictException when updating to existing email', () => {
    const createUserDto1: CreateUserDto = {
      nome: 'João Silva',
      email: 'joao@exemplo.com',
    };
    const createUserDto2: CreateUserDto = {
      nome: 'Maria Santos',
      email: 'maria@exemplo.com',
    };

    const user1 = service.create(createUserDto1);
    service.create(createUserDto2);

    const updateUserDto: UpdateUserDto = {
      email: 'maria@exemplo.com',
    };

    expect(() => service.update(user1.id, updateUserDto)).toThrow(
      ConflictException,
    );
  });

  it('should throw NotFoundException when updating non-existent user', () => {
    const updateUserDto: UpdateUserDto = {
      nome: 'João Santos',
    };

    expect(() => service.update('non-existent-id', updateUserDto)).toThrow(
      NotFoundException,
    );
  });
});

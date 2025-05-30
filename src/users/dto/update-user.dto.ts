import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string' })
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  nome?: string;

  @IsOptional()
  @IsEmail({}, { message: 'O e-mail deve ter um formato válido' })
  email?: string;
}

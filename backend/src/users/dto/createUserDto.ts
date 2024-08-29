import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import { IsBuffer } from "src/helpers/validators/isBuffer";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    nickname: string;


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string;

    @IsOptional()
    @IsBuffer()
    @ApiProperty({ type: 'string', format: 'binary' })
    img?: Buffer;
}
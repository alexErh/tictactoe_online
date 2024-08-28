import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    nickname: string; //unique


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    password: string;

}
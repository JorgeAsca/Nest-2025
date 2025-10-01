import { IsArray, IsBoolean, IsIn, IsInt, IsNumber, IsString, isString, IsUUID, Matches, Max, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdressDto } from "./Adress.dto";
import e from "express";

// Peticion a los reles que hay en la tabla de roles de la Api
const roles: String[] = ['admin', 'user', 'invitado'];

export class CreateUserDto {
    @IsUUID() //Identidicador unico unversal
    id: number;

    @IsString()
    name: string;

    @IsString()
    email: string;
    @IsNumber()
    @Min(18,  {message: "La edad minima es 18"})
    @Max(80,  {message: "La edad maxima es 80"})
    edad?: number; // El ? indica que es opcional

    @IsString()
    telefono?: string;

    /*@IsString()
    @Matches(/^[0-9]{8}[A-Z]$/, {message: "El NIF no es valido"})
    nif: string;*/

    @IsIn(roles, {message: "El rol deben ser los siguientes: " + roles})
    role: string;

    @IsBoolean()
    desdeMadrid: boolean;

    @IsArray()
    @ValidateNested({each: true})
    @Type(() => AdressDto)
    direccion: AdressDto;


}



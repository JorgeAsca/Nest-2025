import { IsNumber, IsString } from "class-validator";

export class AdressDto {
    @IsString()
    calle: string;

    @IsNumber()
    numer: number;

    @IsString()
    Pais: string;

    @IsString()
    ciudad: string;

    
}
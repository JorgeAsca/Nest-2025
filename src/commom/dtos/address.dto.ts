import { IsNumber, IsOptional, IsString, Length } from "class-validator";

export class AdressDto {
    @IsString()
    @IsOptional()
    @Length(2, 50)
    pais: string;

    @IsNumber()
    @IsOptional()
    @Length(2, 50)
    ciudad: number;

    @IsString()
    @IsOptional()
    @Length(2, 50)
    provincia: string;

    @IsString()
    @IsOptional()
    @Length(2, 50)
    calle: string;

    @IsString()
    @IsOptional()
    @Length(2, 3)
    numero: string;

    @IsString()
    @IsOptional()
    @Length(2, 50)
    cpostal: string;

    
}
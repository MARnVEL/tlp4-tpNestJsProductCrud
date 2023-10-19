import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class ProductDTO {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number

    @IsNotEmpty()
    @IsNumber()
    stock: number
}

export class ProductUpdateDTO {

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsNumber()
    price: number

    @IsOptional()
    @IsNumber()
    stock: number

}
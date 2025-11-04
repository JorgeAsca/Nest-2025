import { Column } from "typeorm";

export class Addrees {

    @Column({nullable: true, length: 50}) 
    pais: string;

    @Column({nullable: true, length: 50}) 
    ciudad: string;

    @Column({nullable: true, length: 50}) 
    provincia: string;

    @Column({nullable: true}) 
    calle: string;

    @Column({nullable: true}) 
    numero: string;

    @Column({nullable: true}) 
    cpostal0: string;

    
}
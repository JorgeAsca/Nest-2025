// Este codigo foram parte de el ORM --- Mapeo objeto relacional
import { Column, Entity, PrimaryColumn, BeforeInsert, AfterInsert, UpdateDateColumn } from "typeorm";
import { Addrees } from "../../../commom/modelo/Entity/adress.js";


@Entity('cliente')
export class Cliente {
    
    @PrimaryColumn()
    nif: string

    @Column({ nullable:true,  length: 30})
    nombre: string;

    @Column({ nullable:true,  length: 30})
    apellidos: string;

    @Column('int', {default: 18})
    edad: number;
    
    @Column({nullable: false, unique: true})
    email: string;
    
    @Column('float', {default: 0.3})
    comision: number;

    @Column(() => Addrees, { prefix: '' }) address: Addrees;
    
}
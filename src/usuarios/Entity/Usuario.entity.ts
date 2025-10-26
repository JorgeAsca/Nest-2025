// Este codigo foram parte de el ORM --- Mapeo objeto relacional
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("usuarios")
// Realiza automaticamente el create table usuarios
//Logica de Negocio de la entidad usuario
export class Usuario {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    @Column()
    edad: number;xº1
    @Column()
    email: string;
    @Column()
    nif: string;
}
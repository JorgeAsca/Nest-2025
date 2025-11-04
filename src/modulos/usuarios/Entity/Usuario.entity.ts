// Este codigo foram parte de el ORM --- Mapeo objeto relacional
import { Column, Entity, PrimaryColumn, BeforeInsert, AfterInsert, UpdateDateColumn } from "typeorm";
import { Addrees } from "../../../commom/modelo/Entity/adress.js";
//create table usuario (id ....)
//LOGICA DE NEGOCIO DE LA ENTIDAD USUARIO. Hola



@Entity('usuario')
export class Usuario {
    
    @PrimaryColumn()
    nif: string;

    @Column('uuid')
    id: string;

    @Column({ nullable:true,  length: 30})
    name: string;

    @Column('int', {default: 18})
    edad: number;
    
    @Column({nullable: false, unique: true})
    email: string;
    
    @Column()
    rol: string;

    @Column(() => Addrees, { prefix: ''})addrees: Addrees;

    @UpdateDateColumn()
    updatedAt: Date;

    @UpdateDateColumn()
    createdAt: Date;


    // @AfterInsert()

  
    @BeforeInsert()// Evento disparador
    checkName() { // metodo de ejecucion antes del evento 
        console.log('Antes de insertar el usuario en la BD');
        if (!this.name){
            this.name = 'invitado';
        }

        this.name = this.name
                    .replaceAll(' ', '_')
                    .toUpperCase();  
    }
}
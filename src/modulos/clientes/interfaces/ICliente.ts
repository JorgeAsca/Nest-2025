import { IAdress } from "src/commom/modelo/interfaces/IAddres.js";

//definir la estructura del objeto que viene desde Internet
export interface ICliente {
    nif: string;
    name: string;
    email: string;
    edad: number;
    comision: number;
    direccion: IAdress;
} 
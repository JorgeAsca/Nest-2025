import { Type } from "class-transformer";

export interface iAdrress {
  calle: string;
  ciudad: string;
  pais: string;
  numero: number;
}

export interface iUsuario {
  name: string;
    email: string;
    edad: number;
    rol: string;
    telefonos?: string[];
    nif?: string;
    esdelMadrid?: boolean;
    direcciones?: iAdrress[];
}

type iUsuarios = {
  id: number;
  name: string;
  email: string;
  telefono?: string[];
};



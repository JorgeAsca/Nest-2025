import { Type } from "class-transformer";

export interface iAdrress {
  calle: string;
  ciudad: string;
  pais: string;
  numero: number;
}

export interface iUsuario {
  id: number;
  name: string;
  email: string;
  telefono?: string[];
  direccion?: iAdrress[];
}

type iUsuarios = {
  id: number;
  name: string;
  email: string;
  telefono?: string[];
};



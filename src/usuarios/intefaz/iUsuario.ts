import { Type } from "class-transformer";

export interface iUsuario {
  id: number;
  name: string;
  email: string;
  telefono?: string[];
}

type iUsuarios = {
  id: number;
  name: string;
  email: string;
  telefono?: string[];
};



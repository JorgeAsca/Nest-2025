import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { iUsuario } from './intefaz/iUsuario.js';


type Data = {
  users: iUsuario[];
};
@Injectable()
export class UsuariosService {
  private db: Low<Data>;
  constructor() {
    const adapter = new JSONFile<Data>('src/db/db.json');
    this.db = new Low<Data>(adapter, { users: [] });
  }

  async findAll() {
    await this.db.read(); // Mientras el codigo lo lee la funcion se bloquea
    return this.db.data.users;
  }

  async new(usuario: iUsuario) {
    await this.db.read();
    // const usuario = { id:4 , name:"Jorge", email:"Jorge@example.com" };
    this.db.data.users.push(usuario); // Inserta el Array usuario
    await this.db.write();
    console.log(this.db.data.users);
    return {
      message: 'Usuario creado',
      data: this.db.data.users,
    };
  }
}

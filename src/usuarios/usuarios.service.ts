import { Injectable } from '@nestjs/common';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

@Injectable()
export class UsuariosService {
  private db: Low<any>;
  constructor() {
    const adapter = new JSONFile('src/db/db.json');
    this.db = new Low(adapter, { users: [] });
  }

  async findAll() {
    await this.db.read(); // Mientras el codigo lo lee la funcion se bloquea
    return this.db.data.users;
  }

  async new(usuario: any) {
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

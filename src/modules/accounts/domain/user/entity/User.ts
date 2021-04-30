/* eslint-disable camelcase */
import { v4 as uuid } from 'uuid';

import { IUserDTO } from './IUserDTO';

class User {
  id: string;

  name: string;

  username: string;

  password: string;

  document_id_cpf: string;

  email: string;

  phone_number: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  public create({
    name,
    document_id_cpf,
    email,
    password,
    phone_number,
    username,
  }: IUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      document_id_cpf,
      email,
      password,
      phone_number,
      username,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return user;
  }
}

export { User };

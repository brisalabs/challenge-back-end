/* eslint-disable camelcase */
import { BaseEntity } from '@core/.';
import { Column, Entity } from 'typeorm';

@Entity('users')
class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  document_id_cpf: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone_number: string;
}

export { User };

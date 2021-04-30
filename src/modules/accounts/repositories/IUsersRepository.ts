import { User } from '../domain/user/entity';

export interface IUsersRepository {
  exists(email: string): Promise<boolean>;
  findByUserName(username: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findByDocumentId(documentId: string): Promise<User>;
  save(user: User): Promise<void>;
  create(user: User): Promise<void>;
}

import { User } from '../../domain/user/entity';
import { IUsersRepository } from '../IUsersRepository';

class UserRepository implements IUsersRepository {
  async exists(email: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async findByDocumentId(documentId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { UserRepository };

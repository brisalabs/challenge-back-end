import { User } from '@modules/accounts/domain/user/entity';
import { IUsersRepository } from '@modules/accounts/repositories';

class MemoryUsersRepository implements IUsersRepository {
  constructor(private users: User[] = []) {}

  async exists(email: string): Promise<boolean> {
    return this.users.some(user => user.email === email);
  }

  async findByUserName(username: string): Promise<User> {
    return this.users.find(user => user.username === username);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find(element => element.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find(element => element.id === id);
  }

  async findByDocumentId(documentId: string): Promise<User> {
    return this.users.find(element => element.document_id_cpf === documentId);
  }

  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex(element => element.id === user.id);

    this.users[userIndex] = user;
  }

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}

export { MemoryUsersRepository };

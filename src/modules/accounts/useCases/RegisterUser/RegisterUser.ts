import { IUserDTO, User } from '../../domain/user/entity';
import { IUsersRepository } from '../../repositories/IUsersRepository';

class RegisterUser {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    document_id_cpf,
    email,
    name,
    password,
    phone_number,
    username,
  }: IUserDTO): Promise<User> {
    const okProps =
      !document_id_cpf ||
      !email ||
      !name ||
      !password ||
      !phone_number ||
      !username;

    if (okProps) {
      throw new Error('User Missing Props!');
    }

    const userExists =
      (await this.usersRepository.findByUserName(username)) ||
      (await this.usersRepository.findByEmail(email)) ||
      (await this.usersRepository.findByDocumentId(document_id_cpf));

    if (userExists) {
      throw new Error('User Already Exists!');
    }

    const userObject = new User();

    const user = userObject.create({
      document_id_cpf,
      email,
      name,
      password,
      phone_number,
      username,
    });

    await this.usersRepository.create(user);

    return user;
  }
}

export { RegisterUser };

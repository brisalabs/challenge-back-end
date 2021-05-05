import { validate } from 'uuid';

import { IUserDTO } from '../../../modules/accounts/domain/user/entity';
import {
  MemoryUsersRepository,
  IUsersRepository,
} from '../../../modules/accounts/repositories';
import { RegisterUser } from '../../../modules/accounts/useCases/RegisterUser/RegisterUser';

let memoryUsersRepository: IUsersRepository;
let registerUser: RegisterUser;
let userProps: IUserDTO;

describe('RegisterUser UseCase', () => {
  beforeEach(() => {
    memoryUsersRepository = new MemoryUsersRepository();
    registerUser = new RegisterUser(memoryUsersRepository);
  });

  userProps = {
    name: 'Mateus Pinto Garcia',
    document_id_cpf: '06790845330',
    email: 'mpgx5.cgmail.com',
    password: 'cutchulanever',
    phone_number: '89981326223',
    username: 'mpgxc',
  };

  it('should be able to register an user with all props', async () => {
    const userInserted = await registerUser.execute(userProps);

    expect(await memoryUsersRepository.exists(userProps.email)).toBeTruthy();
    expect(
      await memoryUsersRepository.findByDocumentId(userProps.document_id_cpf),
    ).toBeTruthy();

    expect(userInserted).toMatchObject(userProps);

    expect(validate(userInserted.id)).toBe(true);
  });

  it('should not be able to register an new user with existing email, document id or phone number', async () => {
    await registerUser.execute(userProps);

    expect(async () => registerUser.execute(userProps)).rejects.toThrowError(
      'User Already Exists!',
    );
  });

  it('should not be able to register an new user with missing props', async () => {
    delete userProps.name;
    delete userProps.password;

    expect(async () => registerUser.execute(userProps)).rejects.toThrowError(
      'User Missing Props!',
    );
  });
});

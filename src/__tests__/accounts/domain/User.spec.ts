import { validate } from 'uuid';

import { User } from '../../../modules/accounts/domain/user/entity';

describe('Domain User Entity', () => {
  const userProps = {
    name: 'Mateus Pinto Garcia',
    document_id_cpf: '06790845330',
    email: 'mpgx5.cgmail.com',
    password: 'cutchulanever',
    phone_number: '89981326223',
    username: 'mpgxc',
  };

  const user = new User();

  it('should be able to create an user with all props', () => {
    Object.assign(user, userProps);

    expect(user).toMatchObject(userProps);

    expect(validate(user.id)).toBe(true);

    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });
});

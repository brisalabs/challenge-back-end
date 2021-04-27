import 'dotenv/config';

import { app } from './app';

app.listen(process.env.PORT_SERVER, () => {
  console.log('Servidor rodando!');
});

import { Router } from 'express';

const router = Router();

router.get('/hello', (request, response) => {
  return response.json({ message: 'Dale dele dole' });
});

export { router };

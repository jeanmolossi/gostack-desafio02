// IMPORTACOES DE MODULOS NECESSÁRIOS
import { Router } from 'express';

// IMPORTACOES DE MODELS

// IMPORTACOES DE CONTROLLERS
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

// IMPORTACAO DE MIDDLEWARES
import authMiddleware from './app/middleware/auth';

// INSTANCIA DE ROTAS
const routes = new Router();

// ROTAS
routes.post('/sessions', SessionController.store); // ROTA DE CADASTRO DE SESSAO
routes.use(authMiddleware); // MIDDLEWARE DE AUTENTICACAO

routes.post('/users', UserController.store); // ROTA DE CADASTRO DE USUARIO
routes.post('/recipients', RecipientController.store); // ROTA DE CADASTRO DE DESTINATARIO

routes.put('/users', UserController.update); // ROTA DE ATUALIZACAO DE USUARIO
routes.put('/recipients', RecipientController.update); // ROTA DE ATUALIZACAO DE DESTINATARIO

export default routes;

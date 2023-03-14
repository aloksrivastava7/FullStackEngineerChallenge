import express from 'express';
import { getRepos, addRepo, editRepo, deleteRepo, getRepoById } from '../controller/userController.js';

const router = express.Router();

router.get('/show', getRepos);
router.post('/add', addRepo);
router.put('/:id', editRepo);
router.delete('/:id', deleteRepo);
router.get('/:id', getRepoById);

export default router; 
import express from 'express';
import { getRepos, addRepo, getRepoById, editRepo, deleteRepo } from '../controller/userController.js';

const router = express.Router();

router.get('/', getRepos);
router.post('/add', addRepo);
router.get('/:id', getRepoById);
router.put('/:id', editRepo);
router.delete('/:id', deleteRepo);

export default router; 
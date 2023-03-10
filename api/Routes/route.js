import express from 'express';
import { getRepos, addRepo, editRepo, deleteRepo } from '../controller/userController.js';

const router = express.Router();

router.get('/all', getRepos);
router.post('/add', addRepo);
router.put('/:id', editRepo);
router.delete('/:id', deleteRepo);

export default router; 
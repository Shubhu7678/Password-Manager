import express from 'express';
import { fetchPassword, addPassword, deletePassword, updatePassword } from '../controllers/userController.js';
const router = express.Router();

router.get('/user-list',fetchPassword);
router.post('/add-password',addPassword);
router.delete('/delete-password/:id',deletePassword);
router.put('/update-password/:id',updatePassword);

export default router;
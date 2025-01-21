import express from 'express';
const router = express.Router();

import { addCredentials, getAllCredentials, getCredentialsById, updateCredentials, deleteCredentials } from '../controllers/credential.js';

router.post('/addCredentials', addCredentials);
router.get('/getAllCredentials', getAllCredentials);
router.get('/getCredentialsById/:credentialId', getCredentialsById);
router.put('/updateCredentials/:credentialId', updateCredentials);
router.delete('/deleteCredentials/:credentialId', deleteCredentials);

export default router;
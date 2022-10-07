//index Routes
import { Router } from 'express';
import helloWorld from '../controllers/indexControllerServerserver.js'
const router = Router();

// add middleware to connect application
router.use('/',helloWorld);
router.use('/hello',helloWorld);

export default router;
//app.use('/bye', byeWorld);
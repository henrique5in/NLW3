import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanageController from './controllers/OrphanageController';


const router = Router();
const upload = multer(uploadConfig);

router.get('/', OrphanageController.home);
router.get('/orphanages', OrphanageController.index);
router.get('/orphanages/:id', OrphanageController.show);
router.post('/orphanages', upload.array('images'),OrphanageController.create);

export default router;
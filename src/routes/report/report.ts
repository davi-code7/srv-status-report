import { Router } from 'express';

import { flowStatus } from '../../controllers/report/report';

const router = Router();

router.post('', flowStatus);

export default router;

import { Router } from 'express';
import { getAllHotels, getHotelById } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const hotelsRouter = Router();

hotelsRouter
    .all('/*', authenticateToken)
    .get('/', getAllHotels)
    .get('/:id', getHotelById);

export { hotelsRouter };
import { Router } from 'express';
import { getAllHotels, getHotelById } from '@/controllers';

const hotelsRouter = Router();

hotelsRouter
    .get('/', getAllHotels)
    .get('/:id', getHotelById); 

export { hotelsRouter };
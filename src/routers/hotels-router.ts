import { Router } from 'express';
import { getAllHotels, getHotelById, getHotelWithRooms } from '@/controllers/hotels-controller';
import { authenticateToken } from '@/middlewares';

const hotelsRouter = Router();

hotelsRouter
    .all('/*', authenticateToken)
    .get('/', getAllHotels)
    .get('/:hotelId', getHotelWithRooms)

export { hotelsRouter };
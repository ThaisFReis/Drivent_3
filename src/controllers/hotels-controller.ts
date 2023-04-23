import { Request, Response } from 'express';
import httpStatus from 'http-status';
import hotelService from '@/services/hotel-service';

// Get All Hotels
export async function getAllHotels(_req: Request, res: Response) {
    try {
        const hotels = await hotelService.getAllHotels();
        return res.status(httpStatus.OK).send(hotels);
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send({});
    }
}

// Get Hotel By Id
export async function getHotelById(req: Request, res: Response) {
    try {
        const hotel = await hotelService.getHotelById(Number(req.params.id));
        return res.status(httpStatus.OK).send(hotel);
    } catch (error) {
        return res.status(httpStatus.NOT_FOUND).send({});
    }
}
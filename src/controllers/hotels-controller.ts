import { Request, Response } from 'express';
import httpStatus from 'http-status';
import hotelService from '@/services/hotel-service';

// Get All Hotels
export async function getAllHotels( req: Request, res: Response) {
    const userId = Number(req);

    try {
        const hotels = await hotelService.getAllHotels(userId);
        return res.status(httpStatus.OK).send(hotels);
    } catch (error) {
        if(error.name === 'NotFoundError') {
            return res.status(httpStatus.NOT_FOUND).send({});
        }

        if(error.name === 'PaymentRequiredError') {
            return res.status(httpStatus.PAYMENT_REQUIRED).send({});
        }

        return res.status(httpStatus.BAD_REQUEST).send({});
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

// Get Hotel with rooms
export async function getHotelWithRooms(req: Request, res: Response) {
    const userId = Number(req);
    const hotelId = Number(req.params);

    try {
        const hotel = await hotelService.getHotelWithRooms(userId, hotelId);
        return res.status(httpStatus.OK).send(hotel);
    }

    catch (error) {
        if (error.name === 'NotFoundError') {
            return res.status(httpStatus.NOT_FOUND).send({});
        }

        if (error.name === 'PaymentRequiredError') {
            return res.status(httpStatus.PAYMENT_REQUIRED).send({});
        }

        return res.status(httpStatus.BAD_REQUEST).send({});
    }
}
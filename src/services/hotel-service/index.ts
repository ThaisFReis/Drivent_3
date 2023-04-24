import { notFoundError } from '@/errors';
import hotelRepository from '@/repositories/hotel-repository';
import { authenticateToken } from '@/middlewares/authentication-middleware';

// Get All Hotels
async function getAllHotels() {
    const hotels = await hotelRepository.getAllHotels();

    if (!hotels) throw notFoundError();

    return hotels;
}

// Get Hotel By Id
async function getHotelById(id: number) {
    const hotel = await hotelRepository.getHotelById(id);

    if (!hotel) throw notFoundError();

    return hotel;
}

const hotelService = {
    getAllHotels,
    getHotelById,
};

export default hotelService;
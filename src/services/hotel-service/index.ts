import { notFoundError } from '@/errors';
import hotelRepository from '@/repositories/hotel-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketsRepository from '@/repositories/tickets-repository';

// Get All Hotels
async function getAllHotels(userId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

    if (!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

    if (!ticket) throw notFoundError();

    if (ticket.status !== 'RESERVED') throw notFoundError();

    if (!ticket.TicketType.includesHotel) throw notFoundError();

    if (ticket.TicketType.isRemote) throw notFoundError();

    const hotels = await hotelRepository.getAllHotels();

    return hotels;
}

// Get Hotel By Id
async function getHotelById(id: number) {
    const hotel = await hotelRepository.getHotelById(id);

    if (!hotel) throw notFoundError();

    return hotel;
}

// Ge Hotel with rooms
async function  getHotelWithRooms(userId: number, hotelId: number) {
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);

    if (!enrollment) throw notFoundError();

    const ticket = await ticketsRepository.findTicketByEnrollmentId(enrollment.id);

    if (!ticket) throw notFoundError();

    if (ticket.status !== 'RESERVED') throw notFoundError();

    if (!ticket.TicketType.includesHotel) throw notFoundError();

    if (ticket.TicketType.isRemote) throw notFoundError();
    
    const hotel = await hotelRepository.getHotelWithRooms(hotelId);

    if (!hotel) throw notFoundError();

    return hotel;
}

const hotelService = {
    getAllHotels,
    getHotelById,
    getHotelWithRooms,
};

export default hotelService;
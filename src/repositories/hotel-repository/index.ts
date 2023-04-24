import { prisma } from "@/config";

// Get All Hotels
async function getAllHotels() {
    return await prisma.hotel.findMany();
}

// Get Hotel By Id
async function getHotelById(id: number) {
    return await prisma.hotel.findUnique({
        where: { id },
    });
}

// Geet Hotel with rooms
async function getHotelWithRooms(hotelId: number){
    return await prisma.hotel.findFirst({
        where: { id: hotelId },
        include: {
            Rooms: true,
        },  
    }); 
}

const hotelRepository = {
    getAllHotels,
    getHotelById,
    getHotelWithRooms,
};

export default hotelRepository;
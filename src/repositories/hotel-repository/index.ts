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

const hotelRepository = {
    getAllHotels,
    getHotelById,
};

export default hotelRepository;
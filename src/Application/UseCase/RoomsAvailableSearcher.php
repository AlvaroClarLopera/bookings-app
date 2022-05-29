<?php

namespace App\Application\UseCase;

use App\Domain\Repository\BookingRepository;
use App\Domain\Repository\RoomProfileRepository;
use App\Domain\RoomProfile;

class RoomsAvailableSearcher
{
    private BookingRepository $bookingRepository;
    private RoomProfileRepository $roomProfileRepository;

    public function __construct(BookingRepository $bookingRepository, RoomProfileRepository $roomProfileRepository)
    {
        $this->bookingRepository = $bookingRepository;
        $this->roomProfileRepository = $roomProfileRepository;
    }

    public function getAmountRoomsAvailable(\DateTime $startDate, \DateTime $endDate, string $roomType): int
    {
        $bookings = $this->bookingRepository->getAllBookingsBetweenDateByType($startDate, $endDate, $roomType);

        $roomProfile = $this->roomProfileRepository->getByType($roomType);

        return $this->getRoomsAvailableByType($bookings, $roomProfile);
    }

    private function getRoomsAvailableByType(array $rooms, RoomProfile $roomType): int
    {
        return $roomType->getTotalRooms() - sizeof($rooms);
    }
}
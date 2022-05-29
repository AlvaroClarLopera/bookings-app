<?php

namespace App\Application\UseCase;

use App\Domain\Repository\RoomProfileRepository;

class BookingPriceCalculator
{
    private RoomProfileRepository $repository;

    public function __construct(RoomProfileRepository $repository)
    {
        $this->repository = $repository;
    }

    public function calculateBookingPrice(\DateTime $startDate, \DateTime $endDate, string $roomType): float
    {
        $roomProfile = $this->repository->getByType($roomType);

        return $roomProfile->calculateBookingPrice($startDate, $endDate);
    }
}
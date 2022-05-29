<?php

namespace App\Domain\Repository;

use App\Domain\Booking;

interface BookingRepository
{
    public function getAll(): array;

    public function getAllBookingsBetweenDateByType(\DateTime $startDate, \DateTime $endDate, string $roomType): array;

    public function save(Booking $booking): void;

    public function applyChanges(): void;
}
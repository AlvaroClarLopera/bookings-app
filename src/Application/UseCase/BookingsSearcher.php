<?php

namespace App\Application\UseCase;

use App\Domain\Repository\BookingRepository;

class BookingsSearcher
{
    private BookingRepository $repository;

    public function __construct(BookingRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getBookings(): array
    {
        $bookings = $this->repository->getAll();

        return $bookings;
    }
}
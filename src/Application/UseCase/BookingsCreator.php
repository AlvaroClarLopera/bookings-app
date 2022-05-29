<?php

namespace App\Application\UseCase;

use App\Domain\Booking;
use App\Domain\Repository\BookingRepository;
use App\Domain\Service\UuidGenerator;
use Symfony\Component;

class BookingsCreator
{
    private BookingRepository $repository;
    private UuidGenerator $uuidGenerator;

    public function __construct(BookingRepository $repository, UuidGenerator $uuidGenerator)
    {
        $this->repository = $repository;
        $this->uuidGenerator = $uuidGenerator;
    }

    public function __invoke(
        \DateTime $startDate,
        \DateTime $endDate,
        string $roomType,
        int $numGuests,
        float $bookingTotals,
        string $name,
        string $email,
        string $phone
    ) {
        $locator = $this->uuidGenerator->generateId()->toString();

        $booking = Booking::createBooking(
            $startDate,
            $endDate,
            $roomType,
            $numGuests,
            $name,
            $email,
            $phone,
            $bookingTotals,
            $locator
        );

        $this->repository->save($booking);
        $this->repository->applyChanges();
    }
}
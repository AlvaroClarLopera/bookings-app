<?php

namespace App\Controller;

use App\Application\UseCase\BookingsSearcher;
use Symfony\Component\HttpFoundation\JsonResponse;

class BookingsGetController
{
    private BookingsSearcher $useCase;

    public function __construct(BookingsSearcher $useCase)
    {
        $this->useCase = $useCase;
    }

    public function __invoke(): JsonResponse
    {

        $bookings = $this->useCase->getBookings();

        self::getResponse($bookings);

        return new JsonResponse(self::getResponse($bookings));
    }

    private function getResponse($bookings): array
    {
        $bookingsResult = [];

        foreach ($bookings as $booking) {
            $bookingArray["startDate"] = $booking->getStartDate()->format('Y-m-d');
            $bookingArray["endDate"] = $booking->getEndDate()->format('Y-m-d');
            $bookingArray["roomType"] = $booking->getRoomType();
            $bookingArray["numGuests"] = $booking->getNumGuests();
            $bookingArray["name"] = $booking->getName();
            $bookingArray["email"] = $booking->getEmail();
            $bookingArray["phone"] = $booking->getPhone();
            $bookingArray["bookingTotals"] = $booking->getBookingTotals();
            $bookingArray["locator"] = $booking->getLocator();
            $bookingsResult[] = $bookingArray;
        }

        return $bookingsResult;

    }
}
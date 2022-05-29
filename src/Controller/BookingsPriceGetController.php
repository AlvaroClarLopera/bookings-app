<?php

namespace App\Controller;

use App\Application\UseCase\BookingPriceCalculator;
use App\Application\UseCase\BookingsSearcher;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class BookingsPriceGetController
{
    private BookingPriceCalculator $useCase;

    public function __construct(BookingPriceCalculator $useCase)
    {
        $this->useCase = $useCase;
    }

    public function __invoke(Request $request): JsonResponse
    {
        $startDate = new \DateTime($request->get('startDate'));
        $endDate = new \DateTime($request->get('endDate'));
        $roomType = $request->get('roomType');

        $bookingTotals = $this->useCase->calculateBookingPrice($startDate, $endDate, $roomType);

        return new JsonResponse(self::getResponse($bookingTotals));
    }

    private function getResponse(float $bookingTotals): array
    {
        $bookingsResult["bookingTotals"] = $bookingTotals;

        return $bookingsResult;
    }
}
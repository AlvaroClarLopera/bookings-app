<?php

namespace App\Controller;

use App\Application\UseCase\BookingsCreator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class BookingsPostController
{
    private BookingsCreator $useCase;

    public function __construct(BookingsCreator $useCase)
    {
        $this->useCase = $useCase;
    }

    public function __invoke(Request $request)
    {
        $bodyParams = json_decode($request->getContent(), true);

        $startDate = new \DateTime($bodyParams["startDate"]);
        $endDate = new \DateTime($bodyParams["endDate"]);

        $roomType = $bodyParams["roomType"];
        $numGuests = $bodyParams["numGuests"];
        $bookingTotals = $bodyParams["bookingTotals"];

        $name = $bodyParams["name"];
        $email = $bodyParams["email"];
        $phone = $bodyParams["phone"];

        $this->useCase->__invoke($startDate, $endDate, $roomType, $numGuests, $bookingTotals, $name, $email, $phone);

        return new Response('', Response::HTTP_CREATED);
    }
}
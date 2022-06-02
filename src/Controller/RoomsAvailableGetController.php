<?php

namespace App\Controller;

use App\Application\UseCase\RoomsAvailableSearcher;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class RoomsAvailableGetController
{
    private RoomsAvailableSearcher $useCase;

    public function __construct(RoomsAvailableSearcher $useCase)
    {
        $this->useCase = $useCase;
    }

    public function __invoke(Request $request): JsonResponse
    {
        $startDate = new \DateTime($request->get('startDate'));
        $endDate = new \DateTime($request->get('endDate'));
        $roomType = $request->get('roomType');

        return new JsonResponse(['rooms_available' => ($this->useCase->getAmountRoomsAvailable($startDate, $endDate, $roomType)), 'roomType' => $roomType]);
    }
}
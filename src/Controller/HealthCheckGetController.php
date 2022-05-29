<?php

namespace App\Controller;

use http\Env\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class HealthCheckGetController
{
    public function __invoke(): JsonResponse
    {
        return new JsonResponse('result: Ok');
    }
}
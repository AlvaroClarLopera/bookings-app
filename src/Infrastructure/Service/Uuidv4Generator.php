<?php

namespace App\Infrastructure\Service;

use App\Domain\Service\UuidGenerator;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

class Uuidv4Generator implements UuidGenerator
{
    public function generateId(): UuidInterface
    {
        return Uuid::uuid4();
    }
}
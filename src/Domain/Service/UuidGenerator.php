<?php

namespace App\Domain\Service;

use Ramsey\Uuid\UuidInterface;

interface UuidGenerator
{
    public function generateId(): UuidInterface;
}
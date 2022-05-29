<?php

namespace App\Domain\Repository;

use App\Domain\RoomProfile;

interface RoomProfileRepository
{
    public function getByType(string $roomType): RoomProfile;
}
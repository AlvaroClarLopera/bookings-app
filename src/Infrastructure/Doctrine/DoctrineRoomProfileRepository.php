<?php

namespace App\Infrastructure\Doctrine;

use App\Domain\Booking;
use App\Domain\Repository\BookingRepository;
use App\Domain\Repository\RoomProfileRepository;
use App\Domain\RoomProfile;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class DoctrineRoomProfileRepository extends ServiceEntityRepository implements RoomProfileRepository
{

    private $entityManger;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Booking::class);
        $this->entityManager = $this->getEntityManager();
    }

    public function getByType(string $roomType): RoomProfile
    {
        $query = $this->entityManager->createQuery("SELECT rt FROM " . RoomProfile::class ." rt WHERE rt.roomType = " . "'{$roomType}'");
        $query->setMaxResults(1);

        return $query->getResult()[0];
    }
}
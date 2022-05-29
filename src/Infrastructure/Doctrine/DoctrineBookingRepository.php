<?php

namespace App\Infrastructure\Doctrine;

use App\Domain\Booking;
use App\Domain\Repository\BookingRepository;
use App\Domain\RoomProfile;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\Persistence\ManagerRegistry;

class DoctrineBookingRepository extends ServiceEntityRepository implements BookingRepository
{

    private $entityManger;

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Booking::class);
        $this->entityManager = $this->getEntityManager();
    }

    public function getAll(): array
    {
        return $this->findAll();
    }

    public function getAllBookingsBetweenDateByType(
        \DateTime $start_date,
        \DateTime $end_date,
        string $room_type
    ): array {
        $start_date = $start_date->format('Y-m-d');
        $end_date = $end_date->format('Y-m-d');

        $query = "SELECT * FROM booking as b WHERE ((b.start_date <= DATE('{$start_date}') AND b.end_date >= DATE('{$end_date}') AND b.start_date <= DATE('{$end_date}') AND b.end_date >= DATE('{$start_date}') ) OR (b.start_date >= DATE('{$start_date}') AND b.end_date >= DATE('{$end_date}') AND b.start_date <= DATE('{$end_date}') AND b.end_date >= DATE('{$start_date}') ) OR (b.start_date >= DATE('{$start_date}') AND b.end_date <= DATE('{$end_date}') AND b.start_date <= DATE('{$end_date}') AND b.end_date >= DATE('{$start_date}') ) OR (b.start_date <= DATE('{$start_date}') AND b.end_date <= DATE('{$end_date}') AND b.start_date <= DATE('{$end_date}') AND b.end_date >= DATE('{$start_date}') )) AND b.room_type = '{$room_type}'";

        $smt = $this->entityManager->getConnection()->executeQuery($query);

        return $smt->fetchAll();

    }

    public function save(Booking $booking): void
    {
        $this->entityManager->persist($booking);
    }

    public function applyChanges(): void
    {
        $this->entityManager->flush();
    }
}
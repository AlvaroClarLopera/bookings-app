<?php

namespace App\Domain;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=RoomProfileRepository::class)
 */
class RoomProfile
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="string")
     */
    private string $id;

    /**
     * @ORM\Column(type="string")
     */
    private string $roomType;

    /**
     * @ORM\Column(type="float")
     */
    private float $roomPrice;

    /**
     * @ORM\Column(type="integer")
     */
    private int $totalRooms;

    public function __construct(string $id, string $roomType, float $roomPrice, int $totalRooms)
    {
        $this->id = $id;
        $this->roomType = $roomType;
        $this->roomPrice = $roomPrice;
        $this->totalRooms = $totalRooms;
    }

    public static function createRoomProfile(string $id, string $roomType, float $roomPrice, int $totalRooms): self
    {
        return new self ($id, $roomType, $roomPrice, $totalRooms);
    }

    public function calculateBookingPrice(\DateTime $startDate, \DateTime $endDate): float
    {
        $bookingsDurationInDays = $startDate->diff($endDate)->days + 1;

        return $this->roomPrice * $bookingsDurationInDays;
    }


    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getRoomType(): string
    {
        return $this->roomType;
    }

    /**
     * @return float
     */
    public function getRoomPrice(): float
    {
        return $this->roomPrice;
    }

    /**
     * @return int
     */
    public function getTotalRooms(): int
    {
        return $this->totalRooms;
    }
}
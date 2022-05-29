<?php

namespace App\Domain;

use DateTime;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BookingRepository::class)
 */
class Booking
{
    /**
     * @ORM\Column(type="date")
     */
    private DateTime $startDate;

    /**
     * @ORM\Column(type="date")
     */
    private \DateTime $endDate;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $roomType;

    /**
     * @ORM\Column(type="integer")
     */
    private int $numGuests;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private string $phone;

    /**
     * @ORM\Column(type="float", length=255)
     */
    private float $bookingTotals;

    /**
     * @ORM\Id()
     * @ORM\Column(type="string")
     */
    private string $locator;

    public function __construct(
        \DateTime $startDate,
        \DateTime $endDate,
        string $roomType,
        int $numGuests,
        string $name,
        string $email,
        string $phone,
        float $bookingTotals,
        string $locator
    ) {
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->roomType = $roomType;
        $this->numGuests = $numGuests;
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->bookingTotals = $bookingTotals;
        $this->locator = $locator;
    }

    public static function createBooking(
        \DateTime $startDate,
        \DateTime $endDate,
        string $roomType,
        int $numGuests,
        string $name,
        string $email,
        string $phone,
        float $bookingTotals,
        string $locator
    ) {
        return new self ($startDate, $endDate, $roomType, $numGuests, $name, $email, $phone, $bookingTotals, $locator);
    }

    /**
     * @return DateTime
     */
    public function getStartDate(): DateTime
    {
        return $this->startDate;
    }

    /**
     * @return DateTime
     */
    public function getEndDate(): DateTime
    {
        return $this->endDate;
    }

    /**
     * @return string
     */
    public function getRoomType(): string
    {
        return $this->roomType;
    }

    /**
     * @return int
     */
    public function getNumGuests(): int
    {
        return $this->numGuests;
    }

    /**
     * @return float
     */
    public function getBookingTotals(): float
    {
        return $this->bookingTotals;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return string
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * @return string
     */
    public function getLocator(): string
    {
        return $this->locator;
    }
}
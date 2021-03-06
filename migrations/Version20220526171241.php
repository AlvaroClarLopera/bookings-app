<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220526171241 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE room_profile (id VARCHAR(255) NOT NULL, room_type VARCHAR(255) NOT NULL, room_price DOUBLE PRECISION NOT NULL, total_rooms INTEGER NOT NULL, PRIMARY KEY(id))');
        $this->addSql(`INSERT INTO "room_profile" ("id", "room_type", "room_price", "total_rooms") VALUES ('12730084-7090-4110-abca-8242dcf76cce', 'SINGLE', 20.0, 10);`);
        $this->addSql(`INSERT INTO "room_profile" ("id", "room_type", "room_price", "total_rooms") VALUES ('0c184e17-6fb5-44cf-bfad-11515d37aacf', 'DOUBLE', 30.0, 5);`);
        $this->addSql(`INSERT INTO "room_profile" ("id", "room_type", "room_price", "total_rooms") VALUES ('81d1eeaf-8c23-4404-903f-bd30d05d1044', 'TRIPLE', 40.0, 4);`);
        $this->addSql(`INSERT INTO "room_profile" ("id", "room_type", "room_price", "total_rooms") VALUES ('c50afb3e-ece2-407e-8ea9-4e3999147a5c', 'QUADRUPLE', 50.0, 6);`);
    }



    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE room_profile');
    }
}

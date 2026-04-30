import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('artist')
export class Artist {
  @PrimaryGeneratedColumn({ name: 'artist_id', type: 'int' })
  artistId!: number;

  @Column({ name: 'artist_name', type: 'varchar', length: 255 })
  artistName!: string;

  @Column({ name: 'is_active', type: 'boolean' })
  isActive!: boolean;

  @Column({ name: 'created_utc', type: 'timestamptz', insert: false })
  createdUtc!: Date;

  @Column({ name: 'created_by', type: 'varchar', length: 255, insert: false })
  createdBy!: string;

  @Column({ name: 'modified_utc', type: 'timestamptz', nullable: true, insert: false })
  modifiedUtc!: Date | null;

  @Column({ name: 'modified_by', type: 'varchar', length: 255, nullable: true, insert: false })
  modifiedBy!: string | null;
}
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from "../../common/entities/base-entity.ts";

@Entity('artist')
export class ArtistEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ 
    name: 'artist_id', 
    type: 'int' 
  })
  artistId!: number;

  @Column({ 
    name: 'artist_name', 
    type: 'varchar', 
    length: 255 
  })
  artistName!: string;

  @Column({ 
    name: 'is_active', 
    type: 'boolean' 
  })
  isActive!: boolean;

  @Column({ 
    name: 'created_utc', 
    type: 'timestamptz', 
    insert: false,
    utc: true
  })
  createdUtc!: Date;

  @Column({ 
    name: 'created_by', 
    type: 'varchar', 
    length: 255, 
    insert: false 
  })
  createdBy!: string;

  @Column({ 
    name: 'modified_utc', 
    type: 'timestamptz', 
    nullable: true, 
    insert: false,
    utc: true
  })
  modifiedUtc!: Date | null;

  @Column({ 
    name: 'modified_by', 
    type: 'varchar', 
    length: 255, 
    nullable: true, 
    insert: false 
  })
  modifiedBy!: string | null;
}
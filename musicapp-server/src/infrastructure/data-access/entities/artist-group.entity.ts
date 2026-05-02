import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { BaseEntity } from "../../common/data-access/entities/base-entity.ts";

@Entity("artist_group")
export class ArtistGroupEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ 
        name: 'artist_group_id', 
        type: 'int' 
    })
    artistGroupId!: number;

    @Column({ 
        name: 'artist_group_name', 
        type: 'varchar', 
        length: 255 
    })
    artistGroupName!: string;

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
    createdUtc: Date = null!;

    @Column({ 
        name: 'created_by', 
        type: 'varchar', 
        length: 255, 
        insert: false 
    })
    createdBy: string = null!;

    @Column({ 
        name: 'modified_utc', 
        type: 'timestamptz', 
        nullable: true, 
        insert: false,
        utc: true
    })
    modifiedUtc: Date | null = null;

    @Column({ 
        name: 'modified_by', 
        type: 'varchar', 
        length: 255, 
        nullable: true, 
        insert: false 
    })
    modifiedBy: string | null = null;
}
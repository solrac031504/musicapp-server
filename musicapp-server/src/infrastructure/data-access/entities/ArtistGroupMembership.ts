import { 
Column,
    Entity,
    PrimaryColumn
 } from "typeorm";

@Entity('artist_group_membership')
export class ArtistGroupMembership {
    @PrimaryColumn({
        name: 'artist_group_id',
        type: 'int'
    })
    artistGroupId!: number;

    @PrimaryColumn({
        name: 'artist_id',
        type: 'int'
    })
    artistId!: number;

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
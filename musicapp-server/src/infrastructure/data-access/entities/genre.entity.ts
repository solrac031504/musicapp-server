import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity('genre')
export class GenreEntity {
    @PrimaryGeneratedColumn({
        name: 'genre_id',
        type: 'int'
    })
    genreId!: number;

    @Column({
        name: 'genre_name',
        type: 'varchar',
        length: 255
    })
    genreName!: string;

    @Column({
        name: 'description',
        type: 'varchar',
        length: 4000
    })
    description!: string;

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
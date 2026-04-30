import { 
    Column,
    Entity, 
    PrimaryColumn
} from "typeorm";
import { BaseEntity } from "../../common/entities/base-entity.ts";

@Entity('genre_hierarchy')
export class GenreHierarchyEntity extends BaseEntity {
    @PrimaryColumn({
        name: 'genre_id',
        type: 'int'
    })
    genreId!: number;

    @PrimaryColumn({
        name: 'parent_genre_id',
        type: 'int'
    })
    parentGenreId!: number;

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
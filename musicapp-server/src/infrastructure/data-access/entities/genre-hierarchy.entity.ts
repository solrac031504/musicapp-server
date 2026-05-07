import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseEntity } from "../../common/data-access/entities/base-entity.ts";

@Entity('genre_hierarchy')
export class GenreHierarchyEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'genre_hierarchy_id',
        type: 'int'
    })
    genreHierarchyId!: number;

    @Column({
        name: 'genre_id',
        type: 'int'
    })
    genreId!: number;

    @Column({
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
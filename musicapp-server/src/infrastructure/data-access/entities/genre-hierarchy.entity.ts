import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity('genre_hierarchy')
export class GenreHierarchyEntity extends BaseTableEntity {
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
}
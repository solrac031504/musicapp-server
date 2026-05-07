import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity('genre')
export class GenreEntity extends BaseTableEntity {
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
}
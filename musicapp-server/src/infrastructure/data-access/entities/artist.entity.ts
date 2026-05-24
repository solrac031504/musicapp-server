import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("artist")
export class ArtistEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "artist_id",
        type: "int",
    })
    artistId!: number;

    @Column({
        name: "artist_name",
        type: "varchar",
        length: 255,
    })
    artistName!: string;

    @Column({
        name: "is_active",
        type: "boolean",
    })
    isActive!: boolean;
}

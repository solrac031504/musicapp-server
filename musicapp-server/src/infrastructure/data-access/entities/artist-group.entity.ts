import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("artist_group")
export class ArtistGroupEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "artist_group_id",
        type: "int",
    })
    artistGroupId!: number;

    @Column({
        name: "artist_group_name",
        type: "varchar",
        length: 255,
    })
    artistGroupName!: string;

    @Column({
        name: "is_active",
        type: "boolean",
    })
    isActive!: boolean;
}

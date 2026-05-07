import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("artist_group_membership")
export class ArtistGroupMembershipEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "artist_group_membership_id",
        type: "int",
    })
    artistGroupMembershipId!: number;

    @Column({
        name: "artist_group_id",
        type: "int",
    })
    artistGroupId!: number;

    @Column({
        name: "artist_id",
        type: "int",
    })
    artistId!: number;
}

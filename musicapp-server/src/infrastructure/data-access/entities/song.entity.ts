import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("song")
export class SongEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "song_id",
        type: "int",
    })
    songId!: number;

    @Column({
        name: "song_name",
        type: "varchar",
        length: 255,
    })
    songName!: string;

    @Column({
        name: "artist_group_id",
        type: "int",
    })
    artistGroupId!: number;

    @Column({
        name: "project_id",
        type: "int",
    })
    projectId!: number;

    @Column({
        name: "producer_group_id",
        type: "int",
        nullable: true,
    })
    producerGroupId!: number | null;

    @Column({
        name: "genre_id",
        type: "int",
    })
    genreId!: number;

    @Column({
        name: "scene_id",
        type: "int",
    })
    sceneId!: number;

    @Column({
        name: "streaming_service_id",
        type: "int",
        nullable: true,
    })
    streamingServiceId!: number;

    @Column({
        name: "duration",
        type: "int",
    })
    duration!: number;

    @Column({
        name: "rating",
        type: "numeric",
        precision: 4,
        scale: 2,
        nullable: true,
    })
    rating!: number;

    @Column({
        name: "is_added",
        type: "boolean",
    })
    isAdded!: boolean;

    @Column({
        name: "is_local_file",
        type: "boolean",
    })
    isLocalFile!: boolean;
}

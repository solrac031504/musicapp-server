import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("project")
export class ProjectEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "project_id",
        type: "int",
    })
    projectId!: number;

    @Column({
        name: "project_name",
        type: "varchar",
        length: 255,
    })
    projectName!: string;

    @Column({
        name: "artist_group_id",
        type: "int",
    })
    artistGroupId!: number;

    @Column({
        name: "scene_id",
        type: "int",
        nullable: true,
    })
    sceneId!: number | null;

    @Column({
        name: "project_type_id",
        type: "int",
    })
    projectTypeId!: number;

    @Column({
        name: "release_date",
        type: "date",
    })
    releaseDate!: Date;

    @Column({
        name: "rating",
        type: "numeric",
        precision: 4,
        scale: 2,
        nullable: true,
    })
    rating!: number;
}

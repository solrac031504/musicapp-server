import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("scene")
export class SceneEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "scene_id",
        type: "int",
    })
    sceneId!: number;

    @Column({
        name: "scene_name",
        type: "varchar",
        length: 255,
    })
    sceneName!: string;

    @Column({
        name: "description",
        type: "varchar",
        length: 4000,
    })
    description!: string;

    @Column({
        name: "is_geographic",
        type: "boolean",
    })
    isGeographic!: boolean;
}

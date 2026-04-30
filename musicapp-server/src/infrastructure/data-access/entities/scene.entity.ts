import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseEntity } from "../../common/entities/base-entity.ts";

@Entity('scene')
export class SceneEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'scene_id',
        type: 'int'
    })
    sceneId!: number;

    @Column({
        name: 'scene_name',
        type: 'varchar',
        length: 255
    })
    sceneName!: string;

    @Column({
        name: 'description',
        type: 'varchar',
        length: 4000
    })
    description!: string;

    @Column({
        name: 'is_geographic',
        type: 'boolean'
    })
    isGeographic!: boolean;

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
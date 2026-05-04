import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseEntity } from "../../common/data-access/entities/base-entity.ts";

@Entity('project')
export class ProjectEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'project_id',
        type: 'int'
    })
    projectId!: number;

    @Column({
        name: 'project_name',
        type: 'varchar',
        length: 255
    })
    projectName!: string;

    @Column({
        name: 'artist_group_id',
        type: 'int'
    })
    artistGroupId!: number;

    @Column({
        name: 'scene_id',
        type: 'int',
        nullable: true
    })
    sceneId!: number | null;

    @Column({
        name: 'project_type_id',
        type: 'int'
    })
    projectTypeId!: number;

    @Column({
        name: 'release_date',
        type: 'date'
    })
    releaseDate!: Date;

    @Column({
        name: 'rating',
        type: 'numeric',
        precision: 4,
        scale: 2,
        nullable: true
    })
    rating!: number;
    
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
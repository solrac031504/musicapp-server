import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseEntity } from "../../common/entities/base-entity.ts";

@Entity('project_type')
export class ProjectTypeEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'project_type_id',
        type: 'int'
    })
    projectTypeId!: number;

    @Column({
        name: 'project_type_name',
        type: 'varchar',
        length: 255
    })
    projectTypeName!: string;

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
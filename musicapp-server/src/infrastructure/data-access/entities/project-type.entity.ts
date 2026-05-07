import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity('project_type')
export class ProjectTypeEntity extends BaseTableEntity {
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
}
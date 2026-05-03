import { 
Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseEntity } from "../../common/data-access/entities/base-entity.ts";

@Entity('producer_group')
export class ProducerGroupEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'producer_group_id',
        type: 'int'
    })
    producerGroupId!: number;

    @Column({
        name: 'producer_group_name',
        type: 'varchar',
        length: 255
    })
    producerGroupName!: string;

    @Column({
        name: 'is_active',
        type: 'boolean'
    })
    isActive!: boolean;

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
import { 
Column,
    Entity, 
    PrimaryGeneratedColumn
} from "typeorm";
import { BaseEntity } from "../../common/data-access/entities/base-entity.ts";

@Entity('producer_group_membership')
export class ProducerGroupMembershipEntity extends BaseEntity {
    @PrimaryGeneratedColumn({
        name: 'producer_group_membership_id',
        type: 'int'
    })
    producerGroupMembershipId!: number;

    @Column({
        name: 'producer_group_id',
        type: 'int'
    })
    producerGroupId!: number;

    @Column({
        name: 'producer_id',
        type: 'int'
    })
    producerId!: number;

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
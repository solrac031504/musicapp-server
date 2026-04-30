import { 
Column,
    Entity, 
    PrimaryColumn
} from "typeorm";
import { BaseEntity } from "../../common/entities/base-entity.ts";

@Entity('producer_group_membership')
export class ProducerGroupMembershipEntity extends BaseEntity {
    @PrimaryColumn({
        name: 'producer_group_id',
        type: 'int'
    })
    producerGroupId!: number;

    @PrimaryColumn({
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
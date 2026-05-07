import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("producer_group_membership")
export class ProducerGroupMembershipEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "producer_group_membership_id",
        type: "int",
    })
    producerGroupMembershipId!: number;

    @Column({
        name: "producer_group_id",
        type: "int",
    })
    producerGroupId!: number;

    @Column({
        name: "producer_id",
        type: "int",
    })
    producerId!: number;
}

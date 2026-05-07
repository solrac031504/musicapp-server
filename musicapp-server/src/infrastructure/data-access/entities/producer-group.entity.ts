import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("producer_group")
export class ProducerGroupEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "producer_group_id",
        type: "int",
    })
    producerGroupId!: number;

    @Column({
        name: "producer_group_name",
        type: "varchar",
        length: 255,
    })
    producerGroupName!: string;

    @Column({
        name: "is_active",
        type: "boolean",
    })
    isActive!: boolean;
}

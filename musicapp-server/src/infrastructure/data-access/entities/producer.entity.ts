import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("producer")
export class ProducerEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: "producer_id",
        type: "int",
    })
    producerId!: number;

    @Column({
        name: "producer_name",
        type: "varchar",
        length: 255,
    })
    producerName!: string;

    @Column({
        name: "is_active",
        type: "boolean",
    })
    isActive!: boolean;
}

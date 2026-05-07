import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity('streaming_service')
export class StreamingServiceEntity extends BaseTableEntity {
    @PrimaryGeneratedColumn({
        name: 'streaming_service_id',
        type: 'int'
    })
    streamingServiceId!: number;

    @Column({
        name: 'streaming_service_name',
        type: 'varchar',
        length: 255
    })
    streamingServiceName!: string;
}
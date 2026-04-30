import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity('streaming_service')
export class StreamingServiceEntity {
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
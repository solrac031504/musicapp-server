import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_login')
export class UserLoginEntity {
    @PrimaryGeneratedColumn({
        name: 'user_login_id',
        type: 'int'
    })
    userLoginId!: number;

    @Column({
        name: 'username',
        type: 'varchar',
        length: 50
    })
    username!: string;

    @Column({
        name: 'user_password',
        type: 'bytea'
    })
    password!: Uint8Array

    @Column({
        name: 'login_count',
        type: 'int'
    })
    loginCount!: number;

    @Column({
        name: 'last_login_date',
        type: 'timestamptz',
        nullable: true
    })
    lastLoginDate!: Date | null;

    @Column({
        name: 'is_active',
        type: 'boolean'
    })
    isActive!: boolean;

    @Column({
        name: 'is_admin',
        type: 'boolean'
    })
    isAdmin!: boolean;

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
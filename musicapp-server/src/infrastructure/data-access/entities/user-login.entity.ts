import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseTableEntity } from "../../common/data-access/entities/base-table-entity.ts";

@Entity("user_login")
export class UserLoginEntity extends BaseTableEntity {
  @PrimaryGeneratedColumn({
    name: "user_login_id",
    type: "int",
  })
  userLoginId!: number;

  @Column({
    name: "username",
    type: "varchar",
    length: 50,
  })
  username!: string;

  @Column({
    name: "user_password",
    type: "bytea",
  })
  password!: Uint8Array;

  @Column({
    name: "login_count",
    type: "int",
  })
  loginCount!: number;

  @Column({
    name: "last_login_date",
    type: "timestamptz",
    nullable: true,
  })
  lastLoginDate!: Date | null;

  @Column({
    name: "is_active",
    type: "boolean",
  })
  isActive!: boolean;

  @Column({
    name: "is_admin",
    type: "boolean",
  })
  isAdmin!: boolean;
}

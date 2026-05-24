import { Column } from "typeorm";
import { BaseEntity } from "./base-entity.ts";

export class BaseTableEntity extends BaseEntity {
	@Column({
		name: "created_utc",
		type: "timestamptz",
		insert: false,
	})
	createdUtc: Date = null!;

	@Column({
		name: "created_by",
		type: "varchar",
		length: 255,
	})
	createdBy: string = null!;

	@Column({
		name: "modified_utc",
		type: "timestamptz",
		nullable: true,
		insert: false,
	})
	modifiedUtc: Date | null = null;

	@Column({
		name: "modified_by",
		type: "varchar",
		length: 255,
		nullable: true,
	})
	modifiedBy: string | null = null;
}

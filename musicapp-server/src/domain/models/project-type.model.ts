import { BaseIdModel } from "../common/models/base-id.model.ts";

export class ProjectTypeModel extends BaseIdModel {
	projectTypeName!: string;

	createdBy: string = null!;

	modifiedBy: string | null = null;
}

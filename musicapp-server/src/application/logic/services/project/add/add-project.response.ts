import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ProjectDTO } from "../../../../dto/project.dto.ts";

export class AddProjectResponse extends BaseItemResponse<ProjectDTO> {
	constructor(item: ProjectDTO | null = null) {
		super(item);
	}
}

import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ProjectDTO } from "../../../../dto/project.dto.ts";

export class UpdateProjectResponse extends BaseItemResponse<ProjectDTO> {
	constructor(dto: ProjectDTO | null) {
		super(dto);
	}
}

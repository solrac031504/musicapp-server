import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ProjectTypeDTO } from "../../../../dto/project-type.dto.ts";

export class ListProjectTypesResponse extends BaseListResponse<ProjectTypeDTO> {
	constructor(items: ProjectTypeDTO[] = []) {
		super(items);
	}
}

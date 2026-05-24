import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ProjectDTO } from "../../../../dto/project.dto.ts";

export class ListProjectsResponse extends BaseListResponse<ProjectDTO> {
    constructor(dtos: ProjectDTO[]) {
        super(dtos);
    }
}

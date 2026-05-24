import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ProjectTypeDTO } from "../../../../dto/project-type.dto.ts";

export class UpdateProjectTypeResponse extends BaseItemResponse<ProjectTypeDTO> {
    constructor(item: ProjectTypeDTO | null = null) {
        super(item);
    }
}

import { ProjectModel } from "../../../../domain/models/project.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProjectDTO } from "../../../dto/project.dto.ts";
import { UpdateProjectResponse } from "../../services/project/update/update-project.response.ts";

export class UpdateProjectResponseMapper extends BaseResponseMapper<UpdateProjectResponse, ProjectModel> {
	public override map(model: ProjectModel): UpdateProjectResponse {
		return new UpdateProjectResponse(new ProjectDTO(model));
	}
}

import { ProjectModel } from "../../../../domain/models/project.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProjectDTO } from "../../../dto/project.dto.ts";
import { AddProjectResponse } from "../../services/project/add/add-project.response.ts";

export class AddProjectResponseMapper extends BaseResponseMapper<AddProjectResponse, ProjectModel> {
	public override map(model: ProjectModel): AddProjectResponse {
		return new AddProjectResponse(new ProjectDTO(model));
	}
}

import { ProjectModel } from "../../../../domain/models/project.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProjectDTO } from "../../../dto/project.dto.ts";
import { GetProjectResponse } from "../../services/project/get/get-project.response.ts";

export class GetProjectResponseMapper extends BaseResponseMapper<GetProjectResponse, ProjectModel> {
	public override map(model: ProjectModel): GetProjectResponse {
		return new GetProjectResponse(new ProjectDTO(model));
	}
}

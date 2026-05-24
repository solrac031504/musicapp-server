import { ProjectModel } from "../../../../domain/models/project.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ProjectDTO } from "../../../dto/project.dto.ts";
import { ListProjectsResponse } from "../../services/project/list/list-projects.response.ts";

export class ListProjectsResponseMapper extends BaseListResponseMapper<ListProjectsResponse, ProjectModel> {
	public override map(models: ProjectModel[]): ListProjectsResponse {
		const dtos = models.map((m) => new ProjectDTO(m));

		return new ListProjectsResponse(dtos);
	}
}

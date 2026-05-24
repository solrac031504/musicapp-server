import { ProjectTypeModel } from "../../../../domain/models/project-type.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ProjectTypeDTO } from "../../../dto/project-type.dto.ts";
import { ListProjectTypesResponse } from "../../services/project-type/list/list-project-types.response.ts";

export class ListProjectTypesResponseMapper extends BaseListResponseMapper<ListProjectTypesResponse, ProjectTypeModel> {
	public override map(models: ProjectTypeModel[]): ListProjectTypesResponse {
		return new ListProjectTypesResponse(models.map((model) => new ProjectTypeDTO(model)));
	}
}

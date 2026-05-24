import { ProjectTypeModel } from "../../../../domain/models/project-type.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProjectTypeDTO } from "../../../dto/project-type.dto.ts";
import { AddProjectTypeResponse } from "../../services/project-type/add/add-project-type.response.ts";

export class AddProjectTypeResponseMapper extends BaseResponseMapper<AddProjectTypeResponse, ProjectTypeModel> {
	public override map(model: ProjectTypeModel): AddProjectTypeResponse {
		return new AddProjectTypeResponse(new ProjectTypeDTO(model));
	}
}

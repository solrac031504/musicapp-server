import { ProjectTypeModel } from "../../../../domain/models/project-type.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProjectTypeDTO } from "../../../dto/project-type.dto.ts";
import { UpdateProjectTypeResponse } from "../../services/project-type/update/update-project-type.response.ts";

export class UpdateProjectTypeResponseMapper extends BaseResponseMapper<UpdateProjectTypeResponse, ProjectTypeModel> {
	public override map(model: ProjectTypeModel): UpdateProjectTypeResponse {
		return new UpdateProjectTypeResponse(new ProjectTypeDTO(model));
	}
}

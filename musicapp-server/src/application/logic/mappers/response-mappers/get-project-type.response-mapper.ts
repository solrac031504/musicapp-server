import { ProjectTypeModel } from "../../../../domain/models/project-type.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProjectTypeDTO } from "../../../dto/project-type.dto.ts";
import { GetProjectTypeResponse } from "../../services/project-type/get/get-project-type.response.ts";

export class GetProjectTypeResponseMapper extends BaseResponseMapper<GetProjectTypeResponse, ProjectTypeModel> {
	public override map(model: ProjectTypeModel): GetProjectTypeResponse {
		return new GetProjectTypeResponse(new ProjectTypeDTO(model));
	}
}

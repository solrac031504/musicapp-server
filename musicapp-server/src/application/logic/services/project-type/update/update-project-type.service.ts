import { ProjectTypeRepository } from "../../../../../infrastructure/data-access/repositories/project-type.repository.ts";
import { ProjectTypeModel } from "../../../../../domain/models/project-type.model.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProjectTypeDTO } from "../../../../dto/project-type.dto.ts";
import { UpdateProjectTypeRequest } from "./update-project-type.request.ts";
import { UpdateProjectTypeResponse } from "./update-project-type.response.ts";
import { UpdateProjectTypeRequestMapper } from "../../../mappers/request-mappers/update-project-type.request-mapper.ts";
import { UpdateProjectTypeResponseMapper } from "../../../mappers/response-mappers/update-project-type.response-mapper.ts";

export class UpdateProjectTypeService extends BaseService<UpdateProjectTypeRequest, UpdateProjectTypeResponse> {
    private readonly repo;
    private readonly reqMapper = new UpdateProjectTypeRequestMapper();
    private readonly resMapper = new UpdateProjectTypeResponseMapper();

    constructor(repo: ProjectTypeRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: UpdateProjectTypeRequest,
    ): Promise<UpdateProjectTypeResponse> {
        const model = this.reqMapper.map(req);

        const updatedModel = await this.repo.update(model);

        return this.resMapper.map(updatedModel);
    }
}

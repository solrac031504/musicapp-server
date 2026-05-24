import { ProjectTypeRepository } from "../../../../../infrastructure/data-access/repositories/project-type.repository.ts";
import { BaseService } from "../../../../common/services/base-service.ts";
import { ProjectTypeDTO } from "../../../../dto/project-type.dto.ts";
import { GetProjectTypeRequest } from "./get-project-type.request.ts";
import { GetProjectTypeResponse } from "./get-project-type.response.ts";
import { GetProjectTypeResponseMapper } from "../../../mappers/response-mappers/get-project-type.response-mapper.ts";

export class GetProjectTypeService extends BaseService<GetProjectTypeRequest, GetProjectTypeResponse> {
    private readonly repo;
    private readonly resMapper = new GetProjectTypeResponseMapper();

    constructor(repo: ProjectTypeRepository) {
        super();
        this.repo = repo;
    }

    public override async execute(
        req: GetProjectTypeRequest,
    ): Promise<GetProjectTypeResponse> {
        const model = await this.repo.getById(req.id);

        if (!model) return new GetProjectTypeResponse().notFound();

        return this.resMapper.map(model);
    }
}

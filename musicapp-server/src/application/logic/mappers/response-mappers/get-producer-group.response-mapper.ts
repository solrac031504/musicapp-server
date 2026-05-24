import { ProducerGroupModel } from "../../../../domain/models/producer-group.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerGroupDTO } from "../../../dto/producer-group.dto.ts";
import { GetProducerGroupResponse } from "../../services/producer-group/get/get-producer-group.response.ts";

export class GetProducerGroupResponseMapper extends BaseResponseMapper<GetProducerGroupResponse, ProducerGroupModel> {
    public override map(model: ProducerGroupModel): GetProducerGroupResponse {
        return new GetProducerGroupResponse(new ProducerGroupDTO(model));
    }
}

import { ProducerModel } from "../../../../domain/models/producer.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerDTO } from "../../../dto/producer.dto.ts";
import { GetProducerResponse } from "../../services/producer/get/get-producer.response.ts";

export class GetProducerResponseMapper extends BaseResponseMapper<GetProducerResponse, ProducerModel> {
	public override map(model: ProducerModel): GetProducerResponse {
		return new GetProducerResponse(new ProducerDTO(model));
	}
}

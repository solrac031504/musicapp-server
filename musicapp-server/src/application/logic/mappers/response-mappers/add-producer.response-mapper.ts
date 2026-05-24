import { ProducerModel } from "../../../../domain/models/producer.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerDTO } from "../../../dto/producer.dto.ts";
import { AddProducerResponse } from "../../services/producer/add/add-producer.response.ts";

export class AddProducerResponseMapper extends BaseResponseMapper<AddProducerResponse, ProducerModel> {
	public override map(model: ProducerModel): AddProducerResponse {
		return new AddProducerResponse(new ProducerDTO(model));
	}
}

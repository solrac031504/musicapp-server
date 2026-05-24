import { ProducerModel } from "../../../../domain/models/producer.model.ts";
import { BaseResponseMapper } from "../../../common/mappers/base-response-mapper.ts";
import { ProducerDTO } from "../../../dto/producer.dto.ts";
import { UpdateProducerResponse } from "../../services/producer/update/update-producer.response.ts";

export class UpdateProducerResponseMapper extends BaseResponseMapper<UpdateProducerResponse, ProducerModel> {
	public override map(model: ProducerModel): UpdateProducerResponse {
		return new UpdateProducerResponse(new ProducerDTO(model));
	}
}

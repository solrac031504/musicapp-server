import { ProducerModel } from "../../../../domain/models/producer.model.ts";
import { BaseListResponseMapper } from "../../../common/mappers/base-list-response-mapper.ts";
import { ProducerDTO } from "../../../dto/producer.dto.ts";
import { ListProducersResponse } from "../../services/producer/list/list-producers.response.ts";

export class ListProducersResponseMapper extends BaseListResponseMapper<ListProducersResponse, ProducerModel> {
	public override map(models: ProducerModel[]): ListProducersResponse {
		const dtos = models.map((model) => new ProducerDTO(model));

		return new ListProducersResponse(dtos);
	}
}

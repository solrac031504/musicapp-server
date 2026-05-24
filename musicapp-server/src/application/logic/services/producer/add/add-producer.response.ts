import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";

export class AddProducerResponse extends BaseItemResponse<ProducerDTO> {
    constructor(item: ProducerDTO | null = null) {
        super(item);
    }
}

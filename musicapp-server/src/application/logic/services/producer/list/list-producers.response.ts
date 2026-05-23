import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ProducerDTO } from "../../../../dto/producer.dto.ts";

export class ListProducerResponse extends BaseListResponse<ProducerDTO> {
    constructor(items: ProducerDTO[] = []) {
        super(items);
    }
}

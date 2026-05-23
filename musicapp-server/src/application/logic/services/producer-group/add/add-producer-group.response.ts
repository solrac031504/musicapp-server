import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";

export class AddProducerGroupResponse extends BaseItemResponse<ProducerGroupDTO> {
    constructor(item: ProducerGroupDTO | null = null) {
        super(item);
    }
}

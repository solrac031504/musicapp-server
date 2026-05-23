import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ProducerGroupDTO } from "../../../../dto/producer-group.dto.ts";

export class ListProducerGroupResponse extends BaseListResponse<ProducerGroupDTO> {
    constructor(items: ProducerGroupDTO[] = []) {
        super(items);
    }
}

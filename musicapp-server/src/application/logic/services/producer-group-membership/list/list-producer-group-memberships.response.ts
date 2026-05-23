import { BaseListResponse } from "../../../../common/responses/base-list-response.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";

export class ListProducerGroupMembershipResponse extends BaseListResponse<ProducerGroupMembershipDTO> {
    constructor(items: ProducerGroupMembershipDTO[] = []) {
        super(items);
    }
}

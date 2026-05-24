import { BaseItemResponse } from "../../../../common/responses/base-item-response.ts";
import { ProducerGroupMembershipDTO } from "../../../../dto/producer-group-membership.dto.ts";

export class UpdateProducerGroupMembershipResponse extends BaseItemResponse<ProducerGroupMembershipDTO> {
    constructor(item: ProducerGroupMembershipDTO | null = null) {
        super(item);
    }
}

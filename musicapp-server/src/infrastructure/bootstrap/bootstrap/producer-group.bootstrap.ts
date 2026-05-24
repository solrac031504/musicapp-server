import { DataSource } from "typeorm";
import { ProducerGroupController } from "../../../api/controllers/producer-group.controller.ts";
import { AddProducerGroupService } from "../../../application/logic/services/producer-group/add/add-producer-group.service.ts";
import { DeleteProducerGroupService } from "../../../application/logic/services/producer-group/delete/delete-producer-group.service.ts";
import { GetProducerGroupService } from "../../../application/logic/services/producer-group/get/get-producer-group.service.ts";
import { ListProducerGroupsService } from "../../../application/logic/services/producer-group/list/list-producer-groups.service.ts";
import { UpdateProducerGroupService } from "../../../application/logic/services/producer-group/update/update-producer-group.service.ts";
import { ProducerGroupRepository } from "../../data-access/repositories/producer-group.repository.ts";

export function bootstrapProducerGroup(dataSource: DataSource): ProducerGroupController {
	const repo = new ProducerGroupRepository(dataSource);

	return new ProducerGroupController(
		new AddProducerGroupService(repo),
		new DeleteProducerGroupService(repo),
		new GetProducerGroupService(repo),
		new ListProducerGroupsService(repo),
		new UpdateProducerGroupService(repo),
	);
}

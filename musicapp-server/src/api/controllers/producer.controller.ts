import { AddProducerRequest, AddProducerResponse, AddProducerService } from "../../application/logic/services/producer/add/add-producer.service.ts";
import {
	DeleteProducerRequest,
	DeleteProducerResponse,
	DeleteProducerService,
} from "../../application/logic/services/producer/delete/delete-producer.service.ts";
import { GetProducerRequest, GetProducerResponse, GetProducerService } from "../../application/logic/services/producer/get/get-producer.service.ts";
import { ListProducersRequest, ListProducersResponse, ListProducersService } from "../../application/logic/services/producer/list/list-producers.service.ts";
import {
	UpdateProducerRequest,
	UpdateProducerResponse,
	UpdateProducerService,
} from "../../application/logic/services/producer/update/update-producer.service.ts";

export class ProducerController {
	private readonly addProducerService;
	private readonly deleteProducerService;
	private readonly getProducerService;
	private readonly listProducersService;
	private readonly updateProducerService;

	constructor(
		addProducerService: AddProducerService,
		deleteProducerService: DeleteProducerService,
		getProducerService: GetProducerService,
		listProducersService: ListProducersService,
		updateProducerService: UpdateProducerService,
	) {
		this.addProducerService = addProducerService;
		this.deleteProducerService = deleteProducerService;
		this.getProducerService = getProducerService;
		this.listProducersService = listProducersService;
		this.updateProducerService = updateProducerService;
	}

	public async addProducer(req: AddProducerRequest): Promise<AddProducerResponse> {
		return await this.addProducerService.execute(req);
	}

	public async deleteProducer(req: DeleteProducerRequest): Promise<DeleteProducerResponse> {
		return await this.deleteProducerService.execute(req);
	}

	public async getProducer(req: GetProducerRequest): Promise<GetProducerResponse> {
		return await this.getProducerService.execute(req);
	}

	public async listProducers(req: ListProducersRequest): Promise<ListProducersResponse> {
		return await this.listProducersService.execute(req);
	}

	public async updateProducer(req: UpdateProducerRequest): Promise<UpdateProducerResponse> {
		return await this.updateProducerService.execute(req);
	}
}

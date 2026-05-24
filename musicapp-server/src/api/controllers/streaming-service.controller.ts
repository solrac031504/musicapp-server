import { AddStreamingServiceRequest } from "../../application/logic/services/streaming-service/add/add-streaming-service.request.ts";
import { AddStreamingServiceResponse } from "../../application/logic/services/streaming-service/add/add-streaming-service.response.ts";
import { AddStreamingServiceService } from "../../application/logic/services/streaming-service/add/add-streaming-service.service.ts";
import { DeleteStreamingServiceRequest } from "../../application/logic/services/streaming-service/delete/delete-streaming-service.request.ts";
import { DeleteStreamingServiceResponse } from "../../application/logic/services/streaming-service/delete/delete-streaming-service.response.ts";
import { DeleteStreamingServiceService } from "../../application/logic/services/streaming-service/delete/delete-streaming-service.service.ts";
import { GetStreamingServiceRequest } from "../../application/logic/services/streaming-service/get/get-streaming-service.request.ts";
import { GetStreamingServiceResponse } from "../../application/logic/services/streaming-service/get/get-streaming-service.response.ts";
import { GetStreamingServiceService } from "../../application/logic/services/streaming-service/get/get-streaming-service.service.ts";
import { ListStreamingServicesRequest } from "../../application/logic/services/streaming-service/list/list-streaming-services.request.ts";
import { ListStreamingServicesResponse } from "../../application/logic/services/streaming-service/list/list-streaming-services.response.ts";
import { ListStreamingServicesService } from "../../application/logic/services/streaming-service/list/list-streaming-services.service.ts";
import { UpdateStreamingServiceRequest } from "../../application/logic/services/streaming-service/update/update-streaming-service.request.ts";
import { UpdateStreamingServiceResponse } from "../../application/logic/services/streaming-service/update/update-streaming-service.response.ts";
import { UpdateStreamingServiceService } from "../../application/logic/services/streaming-service/update/update-streaming-service.service.ts";

export class StreamingServiceController {
	private readonly addStreamingServiceService;
	private readonly deleteStreamingServiceService;
	private readonly getStreamingServiceService;
	private readonly listStreamingServiceService;
	private readonly updateStreamingServiceService;

	constructor(
		addStreamingServiceService: AddStreamingServiceService,
		deleteStreamingServiceService: DeleteStreamingServiceService,
		getStreamingServiceService: GetStreamingServiceService,
		listStreamingServiceService: ListStreamingServicesService,
		updateStreamingServiceService: UpdateStreamingServiceService,
	) {
		this.addStreamingServiceService = addStreamingServiceService;
		this.deleteStreamingServiceService = deleteStreamingServiceService;
		this.getStreamingServiceService = getStreamingServiceService;
		this.listStreamingServiceService = listStreamingServiceService;
		this.updateStreamingServiceService = updateStreamingServiceService;
	}

	// Add streaming service
	public async addStreamingService(req: AddStreamingServiceRequest): Promise<AddStreamingServiceResponse> {
		return await this.addStreamingServiceService.execute(req);
	}

	// Delete streaming service
	public async deleteStreamingService(req: DeleteStreamingServiceRequest): Promise<DeleteStreamingServiceResponse> {
		return await this.deleteStreamingServiceService.execute(req);
	}

	// Get streaming service
	public async getStreamingService(req: GetStreamingServiceRequest): Promise<GetStreamingServiceResponse> {
		return await this.getStreamingServiceService.execute(req);
	}

	// List streaming services
	public async listStreamingService(req: ListStreamingServicesRequest): Promise<ListStreamingServicesResponse> {
		return await this.listStreamingServiceService.execute(req);
	}

	// Update streaming service
	public async updateStreamingService(req: UpdateStreamingServiceRequest): Promise<UpdateStreamingServiceResponse> {
		return await this.updateStreamingServiceService.execute(req);
	}
}

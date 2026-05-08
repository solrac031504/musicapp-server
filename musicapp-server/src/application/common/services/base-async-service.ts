import { BaseRequest } from "../requests/base-request.ts";
import { BaseResponse } from "../responses/base-response.ts";

export abstract class BaseAsyncService<
    TRequest extends BaseRequest,
    TResponse extends BaseResponse,
> {
    abstract execute(req: TRequest): Promise<TResponse>;
}

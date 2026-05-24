import { BaseModel } from "../../../domain/common/models/base.model.ts";
import { BaseRequest } from "../requests/base-request.ts";

export abstract class BaseRequestMapper<
    T extends BaseRequest,
    F extends BaseModel,
> {
    public abstract map(req: T): F;
}

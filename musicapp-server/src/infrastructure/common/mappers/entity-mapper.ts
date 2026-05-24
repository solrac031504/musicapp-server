import { BaseModel } from "../../../domain/common/models/base.model.ts";
import { BaseEntity } from "../data-access/entities/base-entity.ts";

export abstract class EntityMapper<T extends BaseModel, K extends BaseEntity> {
    abstract toModel(entity: K): T;

    abstract fromModel(model: T): K;
}

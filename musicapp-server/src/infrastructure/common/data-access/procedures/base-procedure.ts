import { BaseParameter } from "../parameters/base-parameter.ts";

export abstract class BaseProcedure<T extends BaseParameter, K> {
    abstract executeProcedure(parameter: T): Promise<K>;
}

export abstract class Procedure<T, K> {
    abstract executeProcedure(parameter: T): K;
}
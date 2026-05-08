export class BaseResponse {
    responseStarted: Date = new Date();
    statusCode: number = 200;

    public notFound(): this {
        this.statusCode = 404;
        return this;
    }

    public badRequest(): this {
        this.statusCode = 400;
        return this;
    }
}

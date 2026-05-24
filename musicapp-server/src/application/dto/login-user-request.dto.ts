import { BaseDTO } from "../common/dto/base-dto.ts";

export class LoginUserRequestDTO extends BaseDTO {
	username: string = null!;

	password: string = null!;
}

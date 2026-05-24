import { BaseDTO } from "../common/dto/base-dto.ts";

export class LoginUserResponseDTO extends BaseDTO {
	isAuthenticated: boolean = null!;

	authExpiration: Date | null = null;

	isAdmin: boolean = null!;

	errorMessage: string | null = null;
}

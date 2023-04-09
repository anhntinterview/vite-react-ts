import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { DTO, METHOD } from "@lxb/shared/base/dto.core";

interface ILoginBody {
    username: string;
    password: string;
}

@Exclude()
export class LoginBodyDto implements ILoginBody {
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    @Expose()
    @IsString()
    @IsEmail({}, {
		message: "Must be a valid email.",
	})
    public username: string;

    @Expose()
    @IsString()
    @MinLength(8, {
        message: "Must be longer than or equal to 8 characters",
    })
    public password: string;
}

export class LoginResponseDTO {
    public access_token!: string;
    public expires_in!: number;
}

export class LoginDTO extends DTO {
    public readonly responseDTOClass = LoginBodyDto;

    public responseFormatter = (value: unknown) => {
        return {
            message: "",
            systemCode: "",
            data: {
                access_token: (value as LoginResponseDTO).access_token,
                expires_in: (value as LoginResponseDTO).expires_in,
            }
        }
    }

    constructor(public bodyDTO: LoginBodyDto) {
        super();
    }
}
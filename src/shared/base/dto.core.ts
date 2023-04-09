import { instanceToPlain } from "class-transformer";

export enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
}

export class ResponseDTO<T> {
    public instanceId?: string;

    constructor(
        public data: T,
        public message: string,
        public systemCode: string,
        public debugError?: T
    ) {}
}

export abstract class DTO {
    public abstract readonly responseDTOClass: new (
        ...args: never[]
    ) => unknown;

    public responseFormatter?: (response: unknown) => ResponseDTO<unknown> =
        undefined;
}

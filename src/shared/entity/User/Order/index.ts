import { Exclude, Expose } from "class-transformer";
import {
    IsNumber
} from "class-validator";

@Exclude()
export class Order {
    @Expose()
    statuses!: Array<String>

    @Expose()
    title!: string

    @Expose()
    @IsNumber()
    count!: number
}
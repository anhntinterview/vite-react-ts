import { Exclude, Expose } from "class-transformer";

@Exclude()
export class Avatar {
    @Expose()
    large_url!: string

    @Expose()
    medium_url!: string

    @Expose()
    original_url!: string

    @Expose()
    thumb_url!: string
}
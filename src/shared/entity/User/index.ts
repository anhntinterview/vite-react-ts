import { Exclude, Expose } from "class-transformer";
import {
    IsEmail,
    IsNumberString,
    IsStrongPassword,
    IsNumber,
    IsBoolean,
} from "class-validator";
import { Order } from "./Order";
import { Avatar } from "./Avatar";

@Exclude()
export class User {
    @Expose()
    avatar: Avatar

    @Expose()
    csrf_token: string;

    @Expose()
    first_name: string;

    @Expose()
    last_name: string;

    @Expose()
    @IsEmail()
    email: string;

    @Expose()
    @IsStrongPassword()
    password: string;

    @Expose()
    phone: string;

    @Expose()
    @IsNumberString()
    uid: string;

    @Expose()
    facebook_token: string;

    @Expose()
    referral_code: string;

    @Expose()
    @IsNumber()
    utm_id: number

    @Expose()
    @IsNumber()
    balance: number

    @Expose()
    birthday: string

    @Expose()
    coins: number

    @Expose()
    created_at: 1680580286

    @Expose()
    discount_code_ids: []

    @Expose()
    district_id: string

    @Expose()
    @IsNumber()
    earned_coins: number

    @Expose()
    email_update_required: boolean

    @Expose()
    @IsBoolean()
    email_verified: boolean

    @Expose()
    expert_slug: string

    @Expose()
    full_address: string

    @Expose()
    gender: string

    @Expose()
    @IsBoolean()
    is_admin: boolean

    @Expose()
    @IsBoolean()
    is_expert: boolean

    @Expose()
    @IsNumber()
    membership_level: number

    @Expose()
    @IsNumber()
    membership_level_started_at: number

    @Expose()
    mobile_referral_code: string

    @Expose()
    name: string

    @Expose()
    order_statuses: Array<Order>

    @Expose()
    @IsNumber()
    orders_count: number

    @Expose()
    @IsNumber()
    province_id: number

    @Expose()
    social_accounts: Array<{
        emaiL: string,
        provider: string
    }>

    @Expose()
    store_orders_count: number

    @Expose()
    @IsNumber()
    uuid: number

    @Expose()
    @IsNumber()
    ward_id: number
}

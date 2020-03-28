import { ObjectType, Field, ID, Float, InputType, Int } from 'type-graphql';

/**
 * "confirmNavigation": 0,
        "confirmTransfer": 0,
        "pageLoadDelay": 0,
        "periodicallyDecreaseBalance": false,
        "repeatElements": 0,
        "sessionTimeout": 0,
        "useAdvertisements": false,
        "useTransparentOverlay": false
 */
@ObjectType({description: "The Stupid Shit Object Type."})
@InputType("StupidShitInput")
export class StupidShitType {

    @Field(() => Int)
    confirmNavigation: number;

    @Field(() => Int)
    confirmTransfer: number;

    @Field(() => Int)
    pageLoadDelay: number;

    @Field(() => Boolean)
    periodicallyDecreaseBalance: boolean;

    @Field(() => Int)
    repeatElements: number;

    @Field(() => Int)
    sessionTimeout: number;

    @Field(() => Boolean)
    useAdvertisements: boolean;

    @Field(() => Boolean)
    useTransparentOverlay: boolean;

}
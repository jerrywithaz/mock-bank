import { ObjectType, Field, InputType, Int } from 'type-graphql';

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
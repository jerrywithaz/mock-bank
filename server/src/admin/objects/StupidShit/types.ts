import { ObjectType, Field, InputType, Int } from 'type-graphql';

@ObjectType({description: "The Stupid Shit Object Type."})
@InputType("StupidShitInput")
export class StupidShitType {

    @Field(() => Int, {description: (
        "If the value is greater than 0 it will show a confirmation " +
        "dialog whenever you navigate to a page. The integer value " +
        "represents the number of seconds the dialog will stay open " +
        "after clicking okay."  
    )})
    confirmNavigation: number;

    @Field(() => Int, { description: (
        "If the value is greater than 0 it will show a confirmation " +
        "dialog whenever you transfer money. The integer value " +
        "represents the number of seconds the dialog will stay open " +
        "after clicking okay."
    )})
    confirmTransfer: number;

    @Field(() => Int, { description: (
        "The number of milliseconds to wait between naivgating pages."
    )})
    pageLoadDelay: number;

    @Field(() => Boolean, {description: (
        "If true will randomly decrease the balance on your accounts" +
        "every minute."
    )})
    periodicallyDecreaseBalance: boolean;

    @Field(() => Int, { description: (
        "This setting indicates how many times each html element will " +
        "be repeated. This makes inspecting elements extremely difficult " +
        "for scammers and potentially impossible."
    )})
    repeatElements: number;

    @Field(() => Int, { description: (
        "The number of ms to wait before automatically logging out."
    )})
    sessionTimeout: number;

    @Field(() => Boolean, { description: (
        "Whether or not to randomly show adds at various points " +
        "in the application."
    )})
    useAdvertisements: boolean;

    @Field(() => Boolean, { description: (
        "If true this will append a transparent overlay to the " +
        "bank account that will make it difficult for scammers " +
        "to use the dev tools to change bank account balances."
    )})
    useTransparentOverlay: boolean;

}
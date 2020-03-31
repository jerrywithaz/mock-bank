declare module "creditcard-generator" {
    
    type CreditCardGenerator = {
        GenCC: (schema: string, howMany?: number, randomGen?: () => number) => [string]
    }
    
    const Generator: CreditCardGenerator;

    export default Generator;

}

declare module "react-credit-cards" {

    export type ReactCreditCardsProps = {
        cvc: number;
        expiry: string;
        focused: string;
        number: string;
        name: string;
    };

    class Cards extends React.Component<ReactCreditCardsProps> {

    }

    export default Cards;

}

declare module "tracking" {
    
    const TrackingObject: any;

    export default TrackingObject;

}

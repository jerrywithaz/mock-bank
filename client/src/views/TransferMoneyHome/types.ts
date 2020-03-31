import { RouteComponentProps } from "react-router";
import { AccountType } from "__generated__/graphql/types";

export type TransferMoneyHomeProps = RouteComponentProps & {

};

export type TransferMoneyHomeAccountType = Pick<AccountType, "id" | "name" | "availableBalance" | "accountNumber" | "__typename">;

export type TransferMoneyHomeQuery = {
    accounts: TransferMoneyHomeAccountType[]
};
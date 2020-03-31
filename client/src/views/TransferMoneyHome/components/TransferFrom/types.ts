import { TransferMoneyHomeAccountType } from "views/TransferMoneyHome/types";

export type TransferFromProps = {
    accounts: TransferMoneyHomeAccountType[];
    onAccountChange: (accountId: string) => void;
    transferFromAccount: string | undefined;
};
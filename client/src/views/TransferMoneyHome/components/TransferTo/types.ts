import { TransferMoneyHomeAccountType } from "views/TransferMoneyHome/types";

export type TransferToProps = {
    accounts: TransferMoneyHomeAccountType[];
    onAccountChange: (accountId: string) => void;
    transferFromAccount: string | undefined;
    transferToAccount: string | undefined;
}
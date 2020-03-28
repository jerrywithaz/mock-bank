import { TransactionType } from "./types";
import api from "../../../api";

export async function getTransaction(accountId: string, transactionId: string) {
    const response = await api.get<TransactionType>(`/json/bank/accounts/${accountId}/transactions/${transactionId}`);
    const account = response.data;
    return account;
}

export async function getTransactions(accountId: string) {
    const response = await api.get<TransactionType[]>(`/json/bank/accounts/${accountId}/transactions`);
    const account = response.data;
    return account;
}
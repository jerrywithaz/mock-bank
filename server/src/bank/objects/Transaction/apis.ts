import { TransactionType } from "./types";
import api from "../../../api";

export async function getTransaction(accountId: string, transactionId: string): Promise<TransactionType | null> {
    const response = await api.get<TransactionType>(`/json/bank/accounts/${accountId}/transactions/${transactionId}`);
    const transaction = response.data;
    return transaction || null;
}

export async function getTransactions(accountId: string): Promise<TransactionType[]> {
    const response = await api.get<TransactionType[]>(`/json/bank/accounts/${accountId}/transactions`);
    const transactions = response.data;
    return transactions;
}
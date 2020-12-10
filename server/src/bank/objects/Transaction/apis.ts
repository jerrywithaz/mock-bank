import { v4 as uuidV4 } from 'uuid';
import moment from 'moment';
import { TransactionType, TransactionVerb } from "./types";
import api from "../../../api";
import { getAccount } from './../Account/apis';

export async function getTransaction(accountId: string, transactionId: string): Promise<TransactionType | Error> {
    const response = await api.get<TransactionType>(`/json/bank/transactions?accountId=${accountId}&id=${transactionId}`);
    const transaction = response.data;
    return transaction || new Error(`Could not find a transaction with the id: ${transactionId}`);
}

export async function getTransactions(accountId: string): Promise<TransactionType[]> {
    const response = await api.get<TransactionType[]>(`/json/bank/transactions?accountId=${accountId}`);
    const transactions = response.data;
    return transactions;
}

export async function createTransaction(accountId: string, amount: number, transactionVerb: TransactionVerb, description: string): Promise<TransactionType> {
    const account = await getAccount(accountId);
    const transaction: TransactionType = {
        id: uuidV4(),
        accountId: accountId,
        amount: amount,
        date: moment().toISOString(),
        type: transactionVerb,
        availableBalance: account.availableBalance,
        description: description
    };
    
    await api.post<TransactionType>(`/json/bank/transactions`, transaction);
    
    return transaction;

}
import { v4 as uuidV4 } from 'uuid';
import moment from 'moment';
import { TransactionType, TransactionVerb } from "./types";
import api from "../../../api";
import { getAccount } from './../Account/apis';

export async function getTransaction(accountId: string, transactionId: string): Promise<TransactionType | null> {
    const response = await api.get<TransactionType>(`/json/bank/transactions?accountId=${accountId}&id=${transactionId}`);
    const transaction = response.data;
    return transaction || null;
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
        amount: amount,
        date: moment().toLocaleString(),
        type: transactionVerb,
        availableBalance: account.availableBalance,
        description: description
    };
    
    const response = await api.put(`/json/bank/transactions/?accountId=${accountId}&id=${transaction.id}`, transaction);
    
    return transaction;

}
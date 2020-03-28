import { StupidShitType } from './types';
import api from '../../../api';

export async function getStupidShit(): Promise<StupidShitType> {
    const response = await api.get<StupidShitType>(`/json/admin/stupidShit`);
    const account = response.data;
    return account;
}
import { Customer } from './customer'

export interface Order {
    id: Number;
    customer: Customer;
    total: number;
    placed: Date;
    fulfilled: Date;
}
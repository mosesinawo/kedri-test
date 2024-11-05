export interface TransactionItemProps{
    amount: string;
    recipient: string;
    type: 'deposit' | 'withdrawal' | 'transfer';
}
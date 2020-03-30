export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AccountInput = {
  id: Scalars['ID'];
  accountNumber: Scalars['String'];
  routingNumber: Scalars['String'];
  name: Scalars['String'];
  availableBalance: Scalars['Float'];
  transactions: Array<TransactionInput>;
  type?: Maybe<Scalars['String']>;
};

export type AccountType = {
   __typename?: 'AccountType';
  id: Scalars['ID'];
  accountNumber: Scalars['String'];
  routingNumber: Scalars['String'];
  name: Scalars['String'];
  availableBalance: Scalars['Float'];
  transactions: Array<TransactionType>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  stupidShit: StupidShitType;
  account?: Maybe<AccountType>;
  accounts: Array<AccountType>;
  recentTransactions: Array<TransactionType>;
  transaction?: Maybe<TransactionType>;
  transactions: Array<TransactionType>;
};


export type QueryAccountArgs = {
  accountId: Scalars['ID'];
};


export type QueryTransactionArgs = {
  accountId: Scalars['ID'];
  transactionId: Scalars['ID'];
};


export type QueryTransactionsArgs = {
  accountId: Scalars['ID'];
};

export type StupidShitInput = {
  confirmNavigation: Scalars['Int'];
  confirmTransfer: Scalars['Int'];
  pageLoadDelay: Scalars['Int'];
  periodicallyDecreaseBalance: Scalars['Boolean'];
  preventChangingHTMLValues: Scalars['Boolean'];
  repeatElements: Scalars['Int'];
  sessionTimeout: Scalars['Int'];
  useAdvertisements: Scalars['Boolean'];
  useTransparentOverlay: Scalars['Boolean'];
};

export type StupidShitType = {
   __typename?: 'StupidShitType';
  confirmNavigation: Scalars['Int'];
  confirmTransfer: Scalars['Int'];
  pageLoadDelay: Scalars['Int'];
  periodicallyDecreaseBalance: Scalars['Boolean'];
  preventChangingHTMLValues: Scalars['Boolean'];
  repeatElements: Scalars['Int'];
  sessionTimeout: Scalars['Int'];
  useAdvertisements: Scalars['Boolean'];
  useTransparentOverlay: Scalars['Boolean'];
};

export type TransactionInput = {
  id: Scalars['ID'];
  date: Scalars['String'];
  description: Scalars['String'];
  amount: Scalars['Float'];
  availableBalance: Scalars['Float'];
  type: Scalars['String'];
};

export type TransactionType = {
   __typename?: 'TransactionType';
  id: Scalars['ID'];
  date: Scalars['String'];
  description: Scalars['String'];
  amount: Scalars['Float'];
  availableBalance: Scalars['Float'];
  type: Scalars['String'];
};


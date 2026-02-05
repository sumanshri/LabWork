// app/utils/authStore.ts

export type UserAccount = {
  userId: string;
  password: string;
  email: string;
};

let storedAccount: UserAccount | null = null;

export const saveAccount = (account: UserAccount) => {
  storedAccount = account;
};

export const getAccount = () => {
  return storedAccount;
};

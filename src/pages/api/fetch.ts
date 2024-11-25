import type { NextApiRequest, NextApiResponse } from "next";

type Transaction = {
  date: string;
  description: string;
  amount: number;
};

type AccountInfo = {
  accountName: string;
  balance: number;
  transactions: Transaction[];
};

export default function handler(
  _: NextApiRequest,
  res: NextApiResponse<AccountInfo>
) {
  res.status(200).json({
    accountName: "Checking account",
    balance: 123.45,
    transactions: [
      { date: "2021-01-01", description: "Deposit", amount: 100.0 },
      { date: "2021-01-02", description: "ATM withdrawl", amount: -50.0 },
      { date: "2021-01-03", description: "Zelle to friend", amount: -25.0 },
    ],
  });
}

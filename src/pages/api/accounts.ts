import { ApiError } from "@/zz_testUtils/types";
import { NextApiRequest, NextApiResponse } from "next";

type BankAccount = {
  name: string;
  balance: number;
  id: string;
};

type Loan = {
  name: string;
  nextPaymentDue: string;
  id: string;
};

type Account = BankAccount | Loan;

type Profile = {
  name: string;
  accounts: Account[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile | ApiError>
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
  }
  res.status(200).json({
    name: "Jonathan",
    accounts: [
      { name: "Checking", balance: 100.0, id: "1" },
      { name: "Savings", balance: 1000.0, id: "2" },
      { name: "Mortgage", nextPaymentDue: "01-01-2025", id: "3" },
    ],
  });
}

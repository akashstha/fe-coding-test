import React, { useEffect, useState } from "react";
import Link from "next/link";

export const AccountsTask = () => {
  //interface

  interface Accounts {
    accountNumber: string;
    name: string;
    balance: number;
  }

  type Account = {
    name: string;
    accounts: Accounts[];
  };

  /* 
  1. make a get Call
  2. store the respoonse in the state */

  //  1. make a get Call
  //  2. store the respoonse in the state */

  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    const callApi = async () => {
      const res = await fetch("http://localhost:3000/api/accounts");
      const data = await res.json();
      setAccount(data);
    };
    callApi();
  }, []);
  return (
    <div className="max-w-96 mx-auto space-y-10" style={{backgroundColor:"#A6BFF9"}}>
     <h1 className="font-bold text-2xl">Welcome, {account?.name}</h1>
      <ul className="space-y-10 mx-auto max-w-60">{account?.accounts.map((e,index)=>{
        return(
          <li key={index} className="border border-blue-600 p-3 bg-blue-400 rounded-lg"><p><span className="font-semibold">Name of the Account :</span> {e.name}</p>
          <p> <span className="font-semibold">Account Number : </span>{e.accountNumber}</p>
          <p> <span className="font-semibold">Account Balance : </span><span className={e.balance < 0 ? "text-red-700" :""}>{e.balance}</span></p>
            <Link href = {"/accounts/[accountNumber]"}>
             <button className="border border-black rounded-lg p-3 bg-blue-950 text-white">Transaction </button>
            </Link>
         
          </li>
        )
      })}</ul>
    </div>
  );
};

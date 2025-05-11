import React, { useEffect, useState } from "react";

export const FetchTask = () => {
  /* 1.make a GET api call
     2. store the response in the state variable
     3. show the loading data indicatore
   */

  //1.make a GET api call

  interface Transactions {
    date: string;
    description: string;
    amount: number;
  }

  type Account = {
    accountName: string;
    balance: number;
    transactions: Transactions[];
  };

  const [account, setAccount] = useState<Account>();

  const [loading, setLoading]  = useState(false)
  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
      try {
        await new Promise((resolve)=>setTimeout(resolve,2000))
        const res = await fetch("http://localhost:3000/api/fetchss");
        if(!res.ok){
          throw new Error("something went wrong")
        }
        const data: Account = await res.json();
        //store the response in the state variable
        setAccount(data);
      } catch (error) {
        console.error("API ERROR", error);
      } finally {
        setLoading(false)
      }
    };
    apiCall();
  }, []);

  if(loading){
    return <p className="mx-auto mx-w-xl font-semibold text-red-500">Data is being fetched!!</p>
  }
  return (
    <div>
      Your code goes here
      <h1 className="text-xl ">Account Information:</h1>
      <div className="p-6 mx-auto max-w-xl border border-red-500 mt-2 space-y-2 bg-blue-100">
        <p><span className="font-semibold">Account Name </span>: {account?.accountName}</p>
        <p><span className="font-semibold">Balance </span>: {account?.balance}</p>
        <div className="space-y-4">
          {account?.transactions.map((e,index)=>{
            return(
              <div key={index} className="border border-blue-400 bg-blue-300 rounded-lg p-3">
                <p><span className="font-semibold">Date :</span>{e.date}</p>
                <p><span className="font-semibold">Description :</span>{e.description}</p>
                <p><span className="font-semibold">Amount :</span>{e.amount}</p>
              </div>
            )
          })}
        </div>
      </div>
      {/* 
    1. show the data
    2. add css
    */}
    </div>
  );
};

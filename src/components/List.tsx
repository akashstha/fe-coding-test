import React, { useEffect, useState } from "react";

export const List = () => {
  /* 
  1. make a get call to get the list of users.
  2. store the list in the state variable
  3. filtered the unique value of the list for a drop down.
  4. create a onchange handler to set the selected value in filtred array.
  5. create a filtered array
  <---------------------------->
  6. creating a loading state
  7. if api fails thow error
   */

  interface Users {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  //  2. store the list in the state variable
  const [user, setUser] = useState<Users[]>([]);

  //create a state variable for unique arr
  const [uniqueArr, setUniqueArr] = useState<number[]>([]);

  //create a state variable for selectUsers:
  const [selected, setSelected] = useState<number>();

  // create a loading state

  const[loading, setLoadding] = useState(false)

  //create api error state
  const [error, setError] = useState("")

  //  1. make a get call to get the list of users.
  useEffect(() => {
    const callApi = async () => {
      //  6. creating a loading state

      setLoadding(true)
      try {
        await new Promise((resolve) =>setTimeout(resolve,2000))
        const res = await fetch("https://jsonplaceholder.typicode.com/postsads");
        if(!res.ok){
          throw new Error("Something went wrong!!")
        }
        const data: Users[] = await res.json();
        setUser(data);
        //  3. filtered the unique value of the list for a drop down.
        const uniqueID = data.map((e) => e.userId);
        setUniqueArr([...new Set(uniqueID)]);
      } catch (error) {
        console.error("API ERROR", error);
        setError("something went wrong")
      } finally {
        setLoadding(false)
      }
    };
    callApi();
  }, []);

  if(loading){
    return<p className="font-semibold"> Data is being Fetched.....</p>
  }

  //  4. create a onchange handler to set the selected value in filtred array.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChangeHandler = (e: any) => {
    setSelected(e.target.value);
  };

  //5. create a filtered array

  const filterArr: Users[] = user?.filter((e) => e.userId === Number(selected));

  // console.log("Test", filterArr)

  return (
    <div>
      code goes here
      {error && <p className="text-red-700 font-extrabold">Something went wrong</p>}
      <div className="p-6 space-y-5">
        <h1 className="text-2xl font-bold">Users list:</h1>
        <label className="font-bold">Choose the user ID to get the user title and body </label>
        <select onChange={onChangeHandler} className="border rounded-r-lg border-red-400">
          <option disabled>All</option>
          {uniqueArr?.map((e) => {
            return <option key={e}>{e}</option>;
          })}
        </select>

        <div className="mx-auto max-w-xl space-y-5">
          {filterArr.map((e) => {
            return (
              <div key={e.id} className="border  border-l-purple-500 bg-gray-600 text-white">
                <p><span className="font-semibold">Title:  </span>{e.title}</p>
                <p><span className="font-semibold">body: </span>{e.body}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* 
    1. show the drop down
    2. if value selected in dropdown, show tile and body matching to value of that dropdown */}
    </div>
  );
};

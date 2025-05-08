import { useEffect, useState } from "react";

export const List = () => {
  //create a state to store the list
  const [list, useList] = useState([]);
  const [seletedUserID, useSeletedUserID] = useState(Number);
//   const uniqureArr = Array.from(new Set(list.map((e) => e.id))); // userID
const [loading, setLoading] = useState(false);

  //CALL API
  useEffect(() => {
    const callApi = async () => {
    setLoading(true); // start loading

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        //throw error
        if (!res.ok) {
            throw new Error("Friendly error");
        }
        useList(data);
      } catch (error) {
        console.error("API Failure", error);
      }finally {
      setLoading(false); // stop loading regardless of success or error
    }
    };
    callApi();
  }, []);
//   console.log("test", list);

  const changeHanlder = (e) => {
    useSeletedUserID(e.target.value);
  };

//   const onChangeHandler = () =>{

//   }

  //filtered arr
  
  const fileredArr = list.filter(e=> {
//   console.log(e.userId)
    return(e.userId === Number(seletedUserID))
  })
  
   
  return (
    <div>
      Display the fetched posts test
      {loading && <p>Api being fetched.....</p>}
        <select onChange={(e) => useSeletedUserID(e.target.value)}>
            {list.map(e=>{
                return(<option value={e.seletedUserID}>{e.userId}</option>)
            
            })}
            
        </select>
            <ul>
        {fileredArr.map(e=>{
            return(
                <>
            <div> <li>Title: {e.title}</li></div>
            <div> <li>body: {e.body}</li></div>
            ___________________________________________
            </>
           
                
            )
        })}
        </ul>
    </div>
  );
};

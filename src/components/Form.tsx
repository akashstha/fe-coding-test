import React, { useState } from "react";

export const FormTask = () => {
  type Form = {
    name: "";
    email: "";
    phone: "";
  };

  /* 
1. form state
2. response state
3. error state
4. onSubmithandler
5. check the FromValidation
 6. create a function called onChangeHandler
 7.loading state
*/

  //1. form state
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
  });

  //2. response state
  const [response, setResponse] = useState<Form>();

  const [formValueCheck, setFormValueCheck] = useState("")

  const [loading, setLoading] = useState(false)

  // const [apiError, setApiError] = useState(null)

  // 6. create a function called onChangeHandler

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const formValidation = () =>{
    if(!form.name && !form.phone && !form.email) return true;
    return false;
  }

  //4. onSubmithandler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    //5. check the FromValidation

    if(formValidation()){
      setFormValueCheck("Please fill the Form Correctly!")
      return
    }

    setLoading(true)

    try {
      await new Promise((res)=>setTimeout(res, 2000))
      const res = await fetch("http://localhost:3000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if(!res.ok){
        throw new Error("Something went wrong")
      }
      const data: Form = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("API Failure", error);
    } finally {
          setLoading(false)

    }
  };
  
  if(loading){
    return <p className="text-blue-600 mx-auto max-w-xl font-semibold">Submitting the Form. Please wait!</p>
  }
  return (
    <div>
      {/* 
    1. 3 input fields
    2. submit button
    3. Form already submiited message with resubmit button
    4. error on form submission fields
    5. error on api response
   
    */}
      {response ? (
        <>
          <div className="mx-auto max-w-xl space-y-2">
            <p className="font-semibold text-green-500">Thank you for submitting the Form. We will get back to you!</p>
          <button onClick={() => {setForm({ name: "", email: "", phone: "" }); setResponse(undefined)}} className="border border-black bg-gray-500 p-3 rounded-lg">
            Re-Submit
          </button>
          </div>
        </>
      ) : (
        <form onSubmit={onSubmitHandler} className="space-y-2 mx-auto max-w-xl">
          <p className="font-bold text-red-700">{formValueCheck}</p>
          <h1 className="font-bold">Submit the form</h1>
          <div>
            <label htmlFor="name" className="font-semibold p-3">
              Name :{" "}
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter the name"
              value={form.name}
              onChange={onChangeHandler}
              className="border border-blue-700 bg-gray-500 p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-semibold p-3">
              Email :{" "}
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter the email"
              value={form.email}
              onChange={onChangeHandler}
              className="border border-blue-700 bg-gray-500 p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-semibold p-[9px]">
              Phone :{" "}
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter the phone"
              value={form.phone}
              onChange={onChangeHandler}
              className="border border-blue-700 bg-gray-500 p-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="border border-black bg-gray-500 rounded-lg p-3"
            >
              SUBMIT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

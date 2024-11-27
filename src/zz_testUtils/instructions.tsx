import { AccountsTask } from "@/components/Accounts";
import { Numbers } from "@/components/CodeReview";
import { FetchTask } from "@/components/Fetch";
import { FormTask } from "@/components/Form";
import { ComponentType, ReactNode } from "react";

type Test = {
  Component: ComponentType;
  instructions: ReactNode;
};

export const tests: Record<string, Test> = {
  codeReview: {
    Component: Numbers,
    instructions: (
      <div className="">
        <p>
          Open the CodeReview Component -<b>src/components/CodeReview.tsx</b>
        </p>
        <p>It's is displayed on the right side.</p>
        <p>
          Take a look at the code as if you were reviewing it for a pull
          request. Tell us any feedback you'd give the author.
        </p>
      </div>
    ),
  },
  fetch: {
    Component: FetchTask,
    instructions: (
      <div className="">
        <p>
          Open the Fetch Component -<b>src/components/Fetch.tsx</b>
        </p>
        <p>It's is displayed on the right side.</p>
        <p>
          Your task is to fetch account data from the following endpoint:
          <b>http://localhost:3000/api/fetch</b>
        </p>
        <p>
          This will return some data on a fake bank account which we want you to
          display on the page in whatever format you'd like.
        </p>
      </div>
    ),
  },
  form: {
    Component: FormTask,
    instructions: (
      <div className="">
        <p>
          Open the Form Component -<b>src/components/Form.tsx</b>
        </p>
        <p>It's is displayed on the right side.</p>
        <p>
          Your task is to create a form that allows a user to input their name,
          email, and phone number.
        </p>
        <>
          You'll submit the form to the following endpoint:
          http://localhost:3000/api/form
        </>
        <p>
          When the form is submitted successfully, display the data in a list
          below the form.
        </p>
      </div>
    ),
  },
  accountsReact: {
    Component: AccountsTask,
    instructions: (
      <p>
        Check the <b>instructions/Accounts.md</b> file for all the details.
      </p>
    ),
  },
};

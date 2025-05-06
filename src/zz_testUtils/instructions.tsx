/* eslint-disable react/no-unescaped-entities */
import { AccountsTask } from "@/components/Accounts";
import { FilterableList } from "@/components/CodeReview2";
import { FetchTask } from "@/components/Fetch";
import { FormTask } from "@/components/Form";
import { WelcomeToggler } from "@/components/CodeReview1";
import { List } from "@/components/List";
import React, { ComponentType, ReactNode } from "react";

type Test = {
  Component: ComponentType;
  instructions: ReactNode;
};

export const tests: Record<string, Test> = {
  codeReview2: {
    Component: FilterableList,
    instructions: (
      <div className="space-y-4">
        <p>
          Open the CodeReview Component -
          <b>
            src/components/
            <wbr />
            CodeReview.tsx
          </b>
        </p>
        <p>It's is displayed on the right side.</p>
        <p>
          Take a look at the code as if you were reviewing it for a pull
          request. Tell us any feedback you'd give the author.
        </p>
        <p>This component should implement the following user story:</p>
        <ul className="ml-8">
          <code>
            As a user, I want to be able to filter the list of items by name.
          </code>
        </ul>
      </div>
    ),
  },
  fetch: {
    Component: FetchTask,
    instructions: (
      <div className="space-y-4">
        <p>
          Open the Fetch Component -
          <b>
            src/components/
            <wbr />
            Fetch.tsx
          </b>
        </p>
        <p>It's is displayed on the right side.</p>
        <p>
          Your task is to fetch account data from the following endpoint:
          <wbr />
          <b>
            http://localhost:3000/
            <wbr />
            api/fetch
          </b>
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
      <div className="space-y-4">
        <p>
          Open the Form Component -
          <b>
            src/components/
            <wbr />
            Form.tsx
          </b>
        </p>
        <p>It's is displayed on the right side.</p>
        <p>
          Your task is to create a form that allows a user to input their name,
          email, and phone number.
        </p>
        <>
          You'll submit the form to the following endpoint: <wbr />
          <b>
            http://localhost:3000/
            <wbr />
            api/form
          </b>
        </>
        <p>The API accepts the following fields:</p>
        <ul className="ml-8">
          <li>name: string</li>
          <li>email: string</li>
          <li>phone: string</li>
        </ul>
        <p>
          You can check the API implementation in <b>src/pages/api/form.ts</b>{" "}
          if you'd like.
        </p>
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
        Check the{" "}
        <b>
          instructions/
          <wbr />
          Accounts.md
        </b>{" "}
        file for all the details.
      </p>
    ),
  },
  codeReview1: {
    Component: WelcomeToggler,
    instructions: (
      <div className="space-y-4">
        <p>
          Let's review some code! Please open the WelcomeToggler component:
          <br />
          <b>
            src/components/
            <wbr />
            CodeReview1.tsx
          </b>
        </p>
        <p>You can see the component running on the right side.</p>
        <p>
          Imagine you're reviewing this code for a pull request from a teammate.
          Read through the code and tell us what feedback you would give. What
          could be improved? Are there any bugs?
        </p>
        <p>This component is supposed to implement the following user story:</p>
        <blockquote className="ml-4 border-l-4 pl-4 italic">
          "As a user, I want to click a button labeled 'Toggle Message' to show
          or hide a simple welcome message on the screen."
        </blockquote>
      </div>
    ),
  },
  list: {
    Component: List, // Use the placeholder for now
    instructions: (
      <div className="space-y-4">
        <p>
          Please implement the component logic in:
          <br />
          <b>
            src/components/
            <wbr />
            List.tsx
          </b>
        </p>
        <p>Your task is to:</p>
        <ul className="list-disc ml-8 space-y-1">
          <li>
            Fetch a list of posts from the JSONPlaceholder API endpoint:
            <br />
            <a
              href="https://jsonplaceholder.typicode.com/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://jsonplaceholder.typicode.com/posts
            </a>
          </li>
          <li>Display the fetched posts (e.g., title and body) in a list.</li>
          <li>Show a loading indicator while the data is being fetched.</li>
          <li>
            Display a user-friendly error message if the API request fails.
          </li>
          <li>
            Add an input field that allows users to filter the displayed posts
            by their title (case-insensitive).
          </li>
        </ul>
        <p>
          Focus on clear state management, handling asynchronous operations
          correctly, and providing good user feedback (loading/error states).
        </p>
      </div>
    ),
  },
};

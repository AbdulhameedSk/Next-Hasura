import { gql } from "@apollo/client";

export const FIND_USER_BY_EMAIL_QUERY = gql`
  query FindUserByEmail($email: String!) {
    User(distinct_on: email, where: { email: { _eq: $email } }) {
      id
      name
      email
      password
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation insert_user($email: String!, $password: String!, $name: String) {
    insert_User_one(
      object: { email: $email, password: $password, name: $name }
    ) {
      id
      email
      name
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreateTodo($task: String!, $authorId: Int!) {
    insert_todo_one(object: { task: $task, authorId: $authorId }) {
      id
    }
  }
`;

export const GET_POSTS = gql`
  query {
    todo {
      id
      task
      created_at
    }
  }
`;

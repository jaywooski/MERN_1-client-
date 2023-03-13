import { gql, useQuery } from "@apollo/client";

export const GET_ALL_USERS = gql`
    query getAllUsers {
        users {
            name
            email
            tasks {
              action
              id
              deadline
              completed
            }
        }
    }
` 

export const GET_USER = gql`
    query getUser($id: String!) {
        user(id: $id) {
            id
            name
            email
            tasks {
                action
                deadline
                completed
            }
        }
    }
`



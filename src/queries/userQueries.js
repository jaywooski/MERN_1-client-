import { gql, useQuery } from "@apollo/client";

const GET_ALL_USERS = gql`
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

const GET_USER = gql`
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

module.exports = { GET_ALL_USERS, GET_USER };


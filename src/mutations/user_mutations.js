import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation RegisterUser($name: String!, $email: String!, $password: String!){
        register( name: $name, email: $email, password: $password) {
            id
            name
            email
            password
        }
    }

`
export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login( email: $email, password: $password) {
            accessToken
            message
        }
    }
`

/*const LOGOUT_USER = gql`
    mutation LogoutUser(){
        #something{

        }
    }
`*/

export const DELETE_USER = gql`
    mutation DeleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
        }
    }
`


export const UPDATE_USER = gql`
    mutation UpdateUser($id: ID!, $name: String!, $email: String!, $password: String!){
        updateUser(id: $id, input: { name: $name, email: $email, password: $password }) {
            id
            name
            email
            password
        }
    }
`

// module.exports = { REGISTER_USER, LOGIN_USER, /*LOGOUT_USER,*/ DELETE_USER, UPDATE_USER}
import {gql} from "@apollo/client";

const signIN_Customer = gql`
    mutation Mutation($signInCustomerUsername: String!, $signInCustomerPassword: String!) {
        signINCustomer(username: $signInCustomerUsername, password: $signInCustomerPassword)
    }
`;


export  {signIN_Customer}

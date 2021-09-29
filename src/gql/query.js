import {gql} from "@apollo/client";

const GetServiceName= gql`
    query Query {
      getServices {
        service_name
      }
    }

`;


export  {GetServiceName}

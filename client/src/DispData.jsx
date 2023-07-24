import React, { useState } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    homes {
        photo 
        price  
        bds   
        ba  
        area  
        status  
        address  
        company  
        tag  
        ago 
    }
  }
`;

export default function DispData(){ 
    const {data , loading , refetch} = useQuery(QUERY_ALL_USERS) ;  
    if(data) {
        console.log(data)
    } 
    
    return(
        <> 
            {
                data &&
                data.homes.map((homes)=>{
                    return(
                        <>
                        <h1>Name : {homes.price}</h1>
                        </>
                    )
                })
            }
        </>
    )
}
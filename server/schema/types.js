const {gql} =require("apollo-server") 


const typeDefs = gql`
    type User {
        name : String!  
        email : String! 
        age : Int! 
    } 
    type Query {
        users : [User!]!
    }   
    input userinp {
        name : String! 
        email : String! 
        age : Int! 
    }
    type Mutation {
        createuser(input : userinp! ) : User
    }

` 
module.exports = {typeDefs}
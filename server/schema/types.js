const {gql} =require("apollo-server") 


const typeDefs = gql`
    type home {
        photo : String
        price : String
        bds : Int
        ba :Int
        area : Int
        status : String
        address : String
        company : String
        tag : Boolean  
        ago : String
    }
    type Query {
        homes : [home!]! 
        arghome( fs : Int! , pr :Int! , bb : Int! , ht : Int! , mr: Int! ) : [home!]!
    }    
    

` 
module.exports = {typeDefs}
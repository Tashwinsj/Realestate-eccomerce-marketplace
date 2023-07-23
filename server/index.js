const {ApolloServer} = require("apollo-server") 
const {typeDefs} = require("./schema/types")
const {resolvers} = require("./schema/resolvers")


const server = new ApolloServer({typeDefs , resolvers })  ; 

server.listen().then(()=>{console.log("server up and running")})  ; 

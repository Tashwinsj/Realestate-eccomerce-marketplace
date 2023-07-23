const {userlist} = require("../data.js") 

const resolvers = {
    Query : {
        users(){
            return userlist ; 
        }
    }  ,
    Mutation :{
        createuser : (parent , args ) =>{
            const user= args.input  ; 
            userlist.push(user) ;  
            console.log(user)
            return user ; 
        }
    }
}
module.exports = {resolvers}
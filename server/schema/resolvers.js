const {homelist} = require("../data.js") 

const resolvers = {
    Query : {
        homes(){
            return homelist ; 
        } ,
        arghome : (parent , {fs , pr ,bb ,ht, mr})=>{ 
            var sender = homelist ; 
            if(pr ==3){
                sender = sender ; 
            }
            else if(pr ===0 ) {
                  sender = homelist.filter(home => home.p <= 1500000) ;  
            }
            else if(pr ==1 ) {
                  sender = homelist.filter(home => home.p < 2000000 && home.p >1500000) ; 
            }
            else{
                  sender = homelist.filter(home=> home.p >= 2000000)
            }
            if(bb == 0){
                sender =sender 
            }
            else if(bb == 33) {
                sender = sender.filter(home =>home.bds <= 3 )
            }
            else if(bb == 44){
                sender = sender.filter(home =>home.bds > 3 && home.bds <= 4  )
            }
            else{
                sender = sender.filter(home =>home.bds >4 && home.bds <= 5  )
            } 
            if(ht == 0){
                sender = sender.filter(home => home.ty === "hous")
            }
            else if(ht == 1){
                sender = sender.filter(home => home.ty === "aptm")
            }
            else if(ht == 2){
                sender = sender.filter(home => home.ty === "cond")
            } 
            else{
                  sender = sender  ; 
            } 

            if(fs ==0 ){
                sender = sender.filter(home => home.status === "House for sale")
            }
            else if(fs ==1 ){
                sender = sender.filter(home => home.status === "House for Rent")
            }
            else if(fs ==2 ){
                sender = sender.filter(home => home.status === "Sold")
            } 
            else{
                sender = sender ; 
            }
            return sender ; 
        }
    }  ,
     
}
module.exports = {resolvers}
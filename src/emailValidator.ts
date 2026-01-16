
export function isValidEmail(email : string) : boolean{
    
    if(typeof email !== "string")  return false ; 


    if(email.includes(" ")) return false ; 


    const index = email.indexOf("@") ; 
    if(index === -1) return false ; 


    const local = email.slice(0 , index) ; 
    const domain = email.slice(index+1) ; 



    if(local.length ===0 || domain.length === 0) return false ; 

    
    if(!domain.includes(".")) return false  ; 
    if(domain.endsWith(".")) return false  ; 
    if(domain.startsWith(".")) return false  ; 


    return true ; 


}
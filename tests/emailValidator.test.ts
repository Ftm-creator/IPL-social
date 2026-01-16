
 import {isValidEmail} from "../src/emailValidator" ; 


describe("Email validation" , () => {
    
    test("valid email" , () => {
        expect(isValidEmail("a@b.com")).toBe(true)   ;  
    }) ; 



    test("must contain @" , () => {
        expect(isValidEmail("ab.com")).toBe(false)   ;  
    }) ; 



    test("must  not contain  spaces" , () => {
        expect(isValidEmail("a b@c.com")).toBe(false)   ;  
    }) ; 




    test("must have text before and after @" , () => {
        expect(isValidEmail("@b.com")).toBe(false)   ;  
        expect(isValidEmail("a@")).toBe(false)   ;  
    }) ; 



    
    test("domain must contain a point and  a point cannot be last " , () => {
        expect(isValidEmail("a@bcom")).toBe(false)   ;  
        expect(isValidEmail("a@b.")).toBe(false)   ;  
    }) ; 

















}) ; 



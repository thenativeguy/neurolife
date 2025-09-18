'use server'
import { createClient } from "@/auth/server"
import { handleError } from "@/lib/utils";


export const signupAction = async(email: string, password: string) => {
   try{

     const {auth} = await createClient();
    const {data, error} = await auth.signUp({
        email,
        password
    })

    if(error) throw error;

    const userId = data.user?.id;
    const user = data.user;
    console.log("User after signup ===>", user)

    if(!userId) throw new Error("User ID not found after signup");
    return {errorMessage: null} 
   }catch(error){
    console.log("Error ===>", error)
    return handleError(error)
   }
}


export const signinAction = async (email: string, password: string) => {
   try{
 const auth = await createClient();

    const {data, error} = await auth.auth.signInWithPassword({
        email,
        password
    })

    if(error) throw error;

    const userData = data.user;
    
    if(!userData) throw new Error("User not found");
    return {errorMessage: null}
   }catch(error){
    console.log("Error ===>", error);
    return handleError(error);
   }
}


export const logout = async () => {
  try{
    const {auth} = await createClient();
   const {error} = await auth.signOut();

   if(error) throw error;

   return {errorMessage: null};

  }catch(e){
   console.log(e);
   return handleError(e);
  }
}

'use client'
import React, { startTransition } from 'react'
import { Button } from './ui/button'
import { CardContent, CardFooter } from './ui/card'
import { Input } from './ui/input'
import Link from 'next/link'
import { Label } from './ui/label'
import { error } from 'console'
import { signinAction, signupAction } from '@/action/user'
import { useRouter } from 'next/navigation'
import { showErrorToast, showSuccessToast } from '@/lib/toast-utils'

type Props = {
    type: "login" | "signup"
}
function AuthForm({type}: Props) {
    const isLoginForm = type === "login";
    const router = useRouter();

    const handleSubmit = async(formData: FormData) => {
     
       const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      console.log("Email ====>>", email)
      console.log("Password ====>>", password)

      let errorMessage;

      if(isLoginForm){
        errorMessage = (await signinAction(email, password)).errorMessage
      }else{
        errorMessage = (await signupAction(email, password)).errorMessage
      }

      if(!errorMessage){
        if(isLoginForm){
          console.log("Success login")
          showSuccessToast("Login successful")
          startTransition(() => {
            router.push('/');
          })
        }
        else{   
        console.log("Success signup")
        showSuccessToast("Registration successful. Please check your email for verification link.")
        // startTransition(() => {
        //   router.push('/');
        // })
        }

      }else{
        showErrorToast(errorMessage);
        console.log(errorMessage)
      }
    }

  return (
   <form className='flex flex-col gap-4' action={handleSubmit}>
                       <CardContent className='grid w-full gap-4'>
                      <div className='flex flex-col space-y-1.5'>
                           <Label className='block mb-2' htmlFor="email">Email</Label>
                        <Input id="email" name="email" placeholder='Enter your email' type='email' required />
                      </div>
                        <div className='flex flex-col space-y-1.5'>
                             <Label className='block mb-2' htmlFor="email">Password</Label>
                        <Input id="password" name="password" placeholder={isLoginForm ? 'Enter your password' : 'Set your password'} type='password' required />
                        </div>
                       </CardContent>
                          <CardFooter className='flex flex-col items-center gap-4'>
                    <Button>{isLoginForm ? "Login" : "Register"}</Button>

                    <p className='text-sm'>
                        {isLoginForm ? "Don't have an account?" : "Already have an account?"} <Link href={isLoginForm ? "/signup" : '/login'} className='text-blue-500 hover:underline'>{isLoginForm ? "Register" : "Login"}</Link>
                    </p>
                </CardFooter>
                    </form>
  )
}

export default AuthForm

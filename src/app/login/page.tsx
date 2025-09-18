import AuthForm from '@/components/AuthForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return(
        <div className='flex flex-1 flex-col mt-20 items-center'>
            <Card className='w-full max-w-md'>
                <CardHeader className='mb-4'>
                    <CardTitle className='text-center text-3xl'>Login</CardTitle>
                    <AuthForm type='login' />
                </CardHeader>
             
            </Card>
        </div>
    )
}

export default LoginPage;
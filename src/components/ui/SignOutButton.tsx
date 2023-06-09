"use client"

import { FC, useState } from 'react'
import Button from './Button';
import {signOut } from 'next-auth/react';

interface SignOutButtonProps {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);


    const signUserOut = async() => {
        setIsLoading(true)

        try {
            await signOut()
        } catch (error) {
            // toast({
            //     title: 'Error signing out',
            //     message: 'Please try again later',
            //     type: 'error',
            // })
        }
    }

    return <Button size = "sm" onClick={signUserOut} isLoading = {isLoading}> Sign Out</Button>
}

export default SignOutButton
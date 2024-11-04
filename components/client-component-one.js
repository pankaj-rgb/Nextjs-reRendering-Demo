'use client'
import 'client-only'
import { useState } from 'react'
import { ClientComponentTwo } from './client-component-two';
export const ClientComponentOne=({children})=>{
    const [name, setName]=useState('batman');

    return <>
    <h1> client component one</h1>
    {children}
    </>
}
'use client'
import 'client-only'
import { useState } from 'react'
export const ClientComponentTwo=()=>{
    const [name, setName]=useState('batman');

    return <h1> client component two</h1>
}
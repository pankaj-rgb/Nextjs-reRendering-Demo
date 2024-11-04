'use client'
import { useState } from "react";

export const NavSearch=()=>{
    console.log('navSearch rendered');
    const [search,setSearch]=useState('');
    return (
        <div>
            Nav Search Input
        </div>
    )
}
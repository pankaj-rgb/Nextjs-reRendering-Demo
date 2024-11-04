import fs from 'fs'
import { ServerComponentTwo } from './server-component-two';
export const ServerComponentOne=()=>{
    fs.readFileSync('components/server-component-one.js','utf-8');
    return <>
    <h1> server component one</h1>
    
    </>
}
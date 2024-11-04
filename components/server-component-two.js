import fs from 'fs'
export const ServerComponentTwo=()=>{
    fs.readFileSync('components/server-component-two.js','utf-8');
    return <h1> server component two</h1>
}
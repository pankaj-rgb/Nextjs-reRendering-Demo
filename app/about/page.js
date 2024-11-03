export default function About() {
    console.log('About page');
    return <h1> About Page {new Date().toLocaleTimeString()} </h1>;
}
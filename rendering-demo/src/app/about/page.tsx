export default function About(){
    console.log("Rendering About Page");
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}
import {cookies} from 'next/headers';

export default async function About(){
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')
    console.log('Theme cookie:', theme);
    console.log("Rendering About Page");
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}
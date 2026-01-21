import Link from 'next/link';

export default function F2() {
    return (
        <>
            <h1 className="text-4xl font-bold">F2 Page</h1>
            <div>

                <Link className='text-blue-500 underline ' href="/f4">F4</Link>
            </div>
        </>
    )    
}
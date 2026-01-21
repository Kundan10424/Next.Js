import Link from 'next/link';

export default function F1() {
  return(
    <>
        <h1 className="text-4xl font-bold">F1 Page</h1>
        <div>
            <Link className='text-blue-500 underline ' href="/f1/f2">F2</Link>
            <Link className='text-blue-500 underline ' href="/f3">F3</Link>
        </div>
    </>
  ); 
}
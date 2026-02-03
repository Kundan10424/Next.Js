import Link from "next/link";

export default function Products(){
    return (
        <>
            <h1>Featured Products</h1>
            <Link href='/products/1'>Product1</Link>
            <Link href='/products/2'>Product2</Link>
            <Link href='/products/3'>Product3</Link>
        </>
    )
}
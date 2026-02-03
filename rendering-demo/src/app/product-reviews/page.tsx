import {Product} from "@/src/components/product";
import {Review} from "@/src/components/review";
import { Suspense } from "react";

export default function ProductReviews(){
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<div>Loading Product...</div>}>
                <Product/>
            </Suspense>
            <Suspense fallback={<div>Loading Review...</div>}>
                <Review/>
            </Suspense>

        </div>
    )
}


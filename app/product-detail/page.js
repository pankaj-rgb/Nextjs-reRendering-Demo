import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetailPage() {
    return (
        <div>
            <h1>Product Detail Page</h1>
            <Suspense fallback={<p>Loading Product Details...</p>}> 
            <Product/>
            </Suspense>

            <Suspense fallback={<p> Loading review details....</p>}>
            <Reviews/>
            </Suspense>
        </div>
    )
}
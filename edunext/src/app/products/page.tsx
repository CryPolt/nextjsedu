import Products from './products';
import {notFound} from "next/navigation";
import {Metadata} from "next";
import page from '../static/page.mdx'

export const metadata: Metadata = {
    title: 'Products',
}
/*console.log(metadata)*/

/*export async function generateMetadata({
    params,
}: {
    params: {slug}
}): Promise<Metadata> {
    const product = await getData(slug)
    return { title: product.title }
}*/

/*export const revalidate = 3600 // 1 hours*/

/// SSR, ISR , SSG
const fetchData = async () => {
    const response = await fetch('https://api.sampleapis.com/coffee/hot', {
        cache: 'no-cache',
        next: {
            revalidate: 1400, //1hours
        },
    })
    const data = await response.json()
    return data
}

export default async function Page() {

    const data = await fetchData()
    if (!data) notFound()

    return <Products  />
    return <Page />
}



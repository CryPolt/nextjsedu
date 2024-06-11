import styles from './Products.module.scss';
import Image from "next/image";
import {headers} from "next/headers";
/*
import {useParams, useRouter} from "next/navigation";
*/

export default function Products() {

    // const params = useParams<{slug:string}>()
    //
    // params.slug

    return <div className={styles.products}>Products
        {/*
    <Image src='/next.svg' width={500} height={500} alt=''/>
*/}
    </div>
}
    // export const getApiToken = () => {
    // `use server`
    //     headers()
    //     console.log(process.env.TOKEN)
    // }


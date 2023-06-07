import Image from "next/image";

const IconsComponent = () => {
    return ( 
        <section className="flex items-start mx-4 flex-col gap-4">
            {/* <Image src="/images/www" alt="strona www" width={50} height={50}/> */}
            <p>NIP: 999-888-777</p>
            <a>604-181-632</a>
            <a>kontakt@successweb.pl</a>
        </section>
     );
}
 
export default IconsComponent;
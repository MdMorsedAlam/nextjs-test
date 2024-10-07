import Link from "next/link";

const Navbar=()=>{
    return(
       <section className="w-[600px] mx-auto mt-2">
        <ul className="flex justify-evenly gap-3 items-center ">
            <li className="font-bold cursor-pointer text-xl bg-green-500 text-white px-3 hover:bg-green-600 py-1 rounded-md"><Link href="/">Home</Link></li>
            <li className="font-bold cursor-pointer text-xl bg-green-500 text-white px-3 hover:bg-green-600 py-1 rounded-md"><Link href="/about">About</Link></li>
           <li className="font-bold cursor-pointer text-xl bg-green-500 text-white px-3 hover:bg-green-600 py-1 rounded-md"><Link href="/contact">Contact</Link></li>
           <li className="font-bold cursor-pointer text-xl bg-green-500 text-white px-3 hover:bg-green-600 py-1 rounded-md"> <Link href="/products">Blog</Link></li>
           <li className="font-bold cursor-pointer text-xl bg-green-500 text-white px-3 hover:bg-green-600 py-1 rounded-md"> <Link href="/login">Login</Link></li>
        </ul>
       </section>
    )
}
export default Navbar;
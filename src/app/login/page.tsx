import Link from "next/link";

const LoginPage=()=>{
    return(
        <div>
            <h1>Login Page</h1>
            
            <Link href="/register"><p className="cursor-pointer bg-green-500 text-white px-3 hover:bg-green-600 py-1 rounded-md">Register</p></Link>
        </div>
    )
}


export default LoginPage;
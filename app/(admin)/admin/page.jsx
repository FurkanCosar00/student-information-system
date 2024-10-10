import { signOut } from "@/app/login/actions";

export default async function AdminPage(){
    return(
        <div>
            <h1>admin sayfası</h1>

            <form action={signOut}>
                <button>sign out</button>
            </form>
        </div>
    )
}
import { signOut } from "@/app/login/actions";
import { createClient } from "@/utils/supabase/server";

export default async function AdminPage() {
    const supabase = createClient();

    let { data: students } = await supabase
    .from('students')
    .select('*')
    console.log(students)
    return (
        <div>
            <h1>admin sayfası</h1>

            <form action={signOut}>
                <button>sign out</button>
            </form>

            {students.map((x, i) =>
                <div className="student" key={i}>
                    <p>{x.firstName}</p>
                    <p>{x.lastName}</p>
                </div>
            )}
        </div>
    )
}
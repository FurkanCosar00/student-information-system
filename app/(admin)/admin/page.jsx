import { signOut } from "@/app/login/actions";
import { createClient } from "@/utils/supabase/server";
import { addExamGrade, addStudent, deleteStudent } from "./actions";

export default async function AdminPage() {
    const supabase = createClient();

    let { data: students } = await supabase
    .from('students')
    .select('*')

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

                    <form action={addExamGrade}>
                        <input type="hidden" name="studentId" value={x.id} />
                        <label htmlFor="firstMidterm">1. sınav</label>
                        <input id="firstMidterm" name="firstMidterm" type="number" placeholder={x.firstMidterm} />
                        <label htmlFor="secondMidterm">2. sınav</label>
                        <input id="secondMidterm" name="secondMidterm" type="number" placeholder={x.secondMidterm} />
                        <label htmlFor="finalExam">3. sınav</label>
                        <input id="finalExam" name="finalExam" type="number" placeholder={x.finalExam} />
                        <button>notları kaydet</button>
                        <p>{((x.firstMidterm) + (x.secondMidterm) + (x.finalExam)) / 3}</p>
                    </form>

                    <form action={deleteStudent}>
                        <input type="hidden" name="studentId" value={x.id} />
                        <button>öğrenciyi sil</button>
                    </form>
                </div>
            )}

            <form className="addStudent">
                <label htmlFor="firstName">firstname:</label>
                <input id="firstName" name="firstName" type="firstName" required />
                <label htmlFor="lastName">lastname:</label>
                <input id="lastName" name="lastName" type="lastName" required />
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
                <button formAction={addStudent}>Sign up</button>
            </form>
        </div>
    )
}
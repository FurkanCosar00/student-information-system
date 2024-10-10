import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser()

  if(user?.user_metadata?.role === "admin") {
    redirect("/admin")
  }

  const { data } = await supabase
  .from('students')
  .select('*')
  .eq('email', user.email)
  .single();

  return (
    <div>
      <h1>user home page</h1>

      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.email}</p>
      <p>{data.firstMidterm}</p>
      <p>{data.secondMidterm}</p>
      <p>{data.finalExam}</p>
    </div>
  );
}
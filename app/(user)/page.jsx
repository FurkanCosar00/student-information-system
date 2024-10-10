import { signOut } from "../login/acitons";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();
  const {data: { user }} = await supabase.auth.getUser()

  if(user?.user_metadata?.role === "admin") {
    redirect("/admin")
  }

  return (
    <div>
      <h1>user home page</h1>

      <form action={signOut}>
        <button>sign out</button>
      </form>
    </div>
  );
}
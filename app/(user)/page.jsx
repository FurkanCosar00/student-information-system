import { signOut } from "../login/acitons";

export default async function Home() {
  return (
    <div>
      <h1>user home page</h1>

      <form action={signOut}>
        <button>sign out</button>
      </form>
    </div>
  );
}
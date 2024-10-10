import { signOut } from "../login/actions";

export default function UserLayout({ children }){
  return(
      <div>
          <form action={signOut}>
            <button>sign out</button>
          </form>

          {children}
      </div>
  )
}
import { signup } from './actions'

export default function SignupForm() {
    return (
      <form className="signup">
        <label htmlFor="firstName">firstname:</label>
        <input id="firstName" name="firstName" type="firstName" required />
        <label htmlFor="lastName">lastname:</label>
        <input id="lastName" name="lastName" type="lastName" required />
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={signup}>Sign up</button>
      </form>
    )
}
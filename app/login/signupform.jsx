import { signup } from './actions'

export default function SignupForm() {
    return (
      <form className="form">
        <h3>Sign in</h3>

        <div className="form-item">
          <label htmlFor="firstName">firstname:</label>
          <input id="firstName" name="firstName" type="firstName" required />
        </div>

        <div className="form-item">
          <label htmlFor="lastName">lastname:</label>
          <input id="lastName" name="lastName" type="lastName" required />
        </div>

        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        
        <button formAction={signup}>Sign up</button>
      </form>
    )
}
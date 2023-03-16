
import { Link } from 'react-router-dom';
import './login.css';

export const Login = () => {
    return (
        <div className="contenedor ">
            <div className="body row d-flex ">
                <form className="form login-form row justify-content-center align-items-center">
                    <section className='col-lg-4 bg-danger'>
                    </section>
                    <input type="email" className="login-username" placeholder="Email" />
                    <input type="password" className="login-password" placeholder="Password" />
                    <Link to={'/home'}><button className='login-submit'>Ingresar </button></Link>
                </form>
            </div>
        </div>
    )
}

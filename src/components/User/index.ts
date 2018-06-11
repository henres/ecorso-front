import * as login from './Login';
import * as profil from './Profil';
import * as logout from './Logout';
import * as register from './Register';

export namespace User {
    export const Login = login.Login;
    export const Profil = profil.Profil;
    export const Logout = logout.Logout;
    export const Register = register.Register;
}

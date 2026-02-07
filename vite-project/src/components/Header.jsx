import { Link, NavLink } from "react-router-dom";


export const Header = () => {
    return ( 
        <header>
            <nav>
                <Link to='/'>Главная</Link> {" "}
                <Link to='/Contacts'>Контакты</Link> {" "}
                <Link to={'/Login'}>Вход</Link> {" "}
                <Link to={'/Register'}>Регистрация</Link>
            </nav>
        </header>

    )
  }
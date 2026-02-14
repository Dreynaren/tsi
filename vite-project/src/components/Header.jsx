import { Link, NavLink } from "react-router-dom";


export const Header = () => {
    return ( 
        <header className = "bg-[#656565] py-4 px-6 text-white text-xl rounded-lg">
            <nav> 
                <div>
                    <Link to='/' className="hover:text-blue-400">Главная</Link> {" "}
                    <Link to='/Contacts' className="hover:text-blue-400">Контакты</Link> {" "}
                </div>
                <div className="flex justify-end">
                    <Link to='/Login' className="hover:text-blue-400">Вход</Link> {" "}
                    <Link to='/Register'className="hover:text-blue-400">Регистрация</Link>
                </div>
            </nav>
        </header>

    )
  }
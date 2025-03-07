import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";

export default function Header() {

    return (
        <header>
            <nav className={mystyle.navigation}>
                <p>
                    <Link className={mystyle.linktext} to="/">Forside</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/first">Ekspertsystem</Link>
                </p>
            </nav>
        </header>
    )
}
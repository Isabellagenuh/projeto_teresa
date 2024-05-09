import Teresa from "./Teresa"
import {Link} from "react-router-dom" 

export default function Header() {
  return (
<header className="p-3">
   <Teresa />
    <h1 className="text-5xl font-bold mb-6 text-center text-black">Teresa</h1>

        
        <nav>
            <ul className="flex justify-center gap-8">
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/personagens">Personagens</Link>
                </li>
            </ul>
        </nav>
</header>
  )
}

import {NavLinks} from "./navbar-links"
import {NavSearch} from "./navbar-search"

export const Navbar = () => {
    console.log('Rendering Navbar component')

    return(
        <div>
            <NavLinks/>
            <NavSearch/>
        </div>
    )
}
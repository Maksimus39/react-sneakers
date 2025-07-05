import {NavLink} from "react-router";
import {Header} from "./Header";

export const FavoriteIcon = () => {
    return (
        <div className="wrapper clear">
            <NavLink to={'/'}>
                <Header/>
            </NavLink>
        </div>
    )
}
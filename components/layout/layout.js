import MainNavigation from "../mainNavigation/mainNavigation";
import classes from "./layout.module.css"

function Layout(props) {
    return (
        <div className={classes.container} id="layoutContainer">
        <MainNavigation/>
        <main>{props.children}</main>
        </div>
    );
}
export default Layout;
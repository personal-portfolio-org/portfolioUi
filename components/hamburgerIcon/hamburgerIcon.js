import classes from './hamburgerIcon.module.css'
export default function HamburgerIcon(props)
{
    const openNav=  () => {   
        document.getElementById("mySidenav").style.width = "100%";
          }
    return(
        <div className={classes.container} onClick={ (event) => {event.preventDefault();  openNav();}}>
           <div className={classes.containerchild}></div>
           <div className={classes.containerchild}></div>
           <div className={classes.containerchild}></div>
        </div>
    )
}
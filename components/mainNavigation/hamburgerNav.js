import classes from "./mainNavigation.module.css";
import Link from "next/link";
export default function UpdateNav1(props)
{
const closeNav=  () => {   
    document.getElementById("mySidenav").style.width = "0";
      }
return(
<div  id="mySidenav" className={classes.sidenav}>
    <nav>
        <a href="#!" className={classes.closebtn} onClick={ (event) => {event.preventDefault();  closeNav();}}>&times;</a>
        <ul>
        <li><Link href="/"><a onClick={()=>{closeNav();}}>Home</a></Link></li>
        <li><Link href="#about"><a onClick={()=>{closeNav();}}>About</a></Link></li>
        <li><Link href="#skill"><a onClick={()=>{closeNav();}}>Skill</a></Link></li>
        <li><Link href="#project"><a onClick={()=>{closeNav();}}>Project</a></Link></li>
        <li><Link href="#contact"><a onClick={()=>{closeNav();}}>Contact</a></Link></li>
        </ul>
    </nav>
</div>
);
}
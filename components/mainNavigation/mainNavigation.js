import classes from "./mainNavigation.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image';
import HamburgerIcon from "../hamburgerIcon/hamburgerIcon";
import UpdateNav1 from "./hamburgerNav";

export default function MainNavigation(props) {
    const logoUrl='/aniketHomeLogo.svg';
    return (
        <div className={classes.navBarContainer}>
        <UpdateNav1/>
        <header className={classes.header}>
            
            <div>
                <Image src={logoUrl} alt="My logo" width={100} height={80}/>
            </div>
            <div className={classes.navBarItem}>
                <nav>
                    <ul>
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li><Link href="#about"><a>About</a></Link></li>
                        <li><Link href="#skill"><a>Skill</a></Link></li>
                        <li><Link href="#project"><a>Project</a></Link></li>
                        <li><Link href="#contact"><a>Contact</a></Link></li>
                    </ul>
                </nav>
            </div>
            <div className={classes.containerNavIcon}>
                <HamburgerIcon></HamburgerIcon>
            </div>
        </header>
        </div>
    );
};
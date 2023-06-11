import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import AngleDown from './icons/AngleDown'
import { useRouter } from 'next/router'

const Header = () => {

    const [toggle, setToggle] = useState("false");

    const router = useRouter();

  return (
    <header className={`${router.asPath === "/" ? "home" : ""} ${toggle ? "" : "active"}`}>
        <div className='container'>
            <div className='header-wrap'>
        <Logo/>
        <nav>
            <ul>
                <li onClick={()=>setToggle(!toggle)}><Link href="/" className={`${router.asPath === "/" ? "active" : router.asPath === "/home" ? "active" : ""}`}>Home</Link></li>
                <li onClick={()=>setToggle(!toggle)}><Link href="/solution" className={`${router.asPath === "/solution" ? "active" : ""}`}>Solution</Link></li>
                <li onClick={()=>setToggle(!toggle)}><Link href="/about" className={`${router.asPath === "/about" ? "active" : router.asPath === "/about#faq" ? "active" : ""}`}>About</Link></li>
                <li onClick={()=>setToggle(!toggle)}><Link href="/about#faq">FAQ</Link></li>
                <li className='submenu'>
                    <Link href="/">Documents <span className='drop-icon'><AngleDown/></span></Link>
                    <div className='dropdown'>
                    <div className='clip-wrap'>
                    <div className='box-clip clip-border'></div>
                    <ul>
                        <li onClick={()=>setToggle(!toggle)}><Link href="/docs/cyborg-one-pager.pdf" target='_blank'>One Pager</Link></li>
                        <li onClick={()=>setToggle(!toggle)}><Link href="/docs/cyborg-lite-paper-v1.pdf" target='_blank'>Lite Paper</Link></li>
                    </ul>
                    </div>
                    </div>
                </li>
            </ul>
        </nav>
        <Button onClick={()=>setToggle(!toggle)} title="Join Now" link="https://t.me/CyborgNetworkOfficial" size="btn-md"/>
        <div className={`toggle-menu ${toggle ? "" : "active"}`} onClick={()=>setToggle(!toggle)}>
            <div className='toggle-wrap'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </div>
        </div>
    </header>
  )
}

export default Header
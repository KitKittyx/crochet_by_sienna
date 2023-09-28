import { AppBar, Typography, Grid, Toolbar } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEtsy, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons"

interface NavBarProps {
    selectedPage: string,
    setSelectedPage: Dispatch<SetStateAction<string>>
}

const NavBar = ({ selectedPage, setSelectedPage }: NavBarProps) => {

    const getActiveClass = (buttonName: string) => {
        if (buttonName == selectedPage) {
            return 'active'
        }
        else {
            return ''
        }
    }

    return (
        <>
            <AppBar position="fixed" color="primary" sx={{ height: '50px', zIndex: 1000 }}>
                <Toolbar>
                    <nav id="navbar" className="">
                        <ul id="menu">
                            <li><button onClick={() => setSelectedPage('home')} className={getActiveClass('home')}>Home</button></li>
                            <li><button onClick={() => setSelectedPage('about')} className={getActiveClass('about')}>About</button></li>
                            <li><button onClick={() => setSelectedPage('free')} className={getActiveClass('free')}>Free Patterns</button></li>
                            <li><button onClick={() => setSelectedPage('tips')} className={getActiveClass('tips')}>Tips & Tricks</button></li>
                        </ul>
                        <ul id="socialLinks">
                            <li><button onClick={() => window.open('https://www.etsy.com/au/shop/CrochetBySienna', '_blank')}><FontAwesomeIcon icon={faEtsy} /></button></li>
                            <li><button onClick={() => window.open('https://ko-fi.com/crochet_by_sienna', '_blank')}><FontAwesomeIcon icon={faMugSaucer} /></button></li>
                            <li><button onClick={() => window.open('https://www.facebook.com/crochetbysienna/', '_blank')}><FontAwesomeIcon icon={faFacebook} /></button></li>
                            <li><button onClick={() => window.open('https://www.instagram.com/crochet_by_sienna/', '_blank')}><FontAwesomeIcon icon={faInstagram} /></button></li>
                            <li><button onClick={() => window.open('https://www.tiktok.com/@crochet_by_sienna', '_blank')}><FontAwesomeIcon icon={faTiktok} /></button></li>
                        </ul>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar
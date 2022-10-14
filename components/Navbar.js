import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router';
import {useState, useEffect} from "react"
import logo from "../public/img/cc-cases-logo.png";
import { useMediaQuery } from "../utils/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
    {
        title: 'Home',
        path: '/'
      }, 
      {
          title: 'About Us',
          path: '/about-us/'
      },
      {
        title: 'Cases',
        path: '#',
        hasSubMenu: true,
        subMenu: [
          {title: 'ALL CASES',
          path: '/cases/'},
          {title: 'AUDIO & SOUND',
          path: '/cases/audio-and-sound/'},
          {title: 'LIGHTING & STAGING',
          path: '/cases/lighting-and-staging/'},
          {title: 'CABLE TRUNKS',
          path: '/cases/cable-trunks/'},
          {title: 'MUSICAL INSTRUMENTS & GEAR',
          path: '/cases/musical-instruments-and-gear/'},
          {title: 'RACK-MOUNT CASES',
          path: '/cases/rack-mount-cases/'},
          {title: 'LCD',
          path: '/cases/lcd/'},
          {title: 'FILM',
          path: '/cases/film/'},
          {title: 'TOURING, RIGGING & STAGING',
          path: '/cases/touring-rigging-staging/'},
          {title: 'OTHERS',
          path: '/cases/others/'},
        ]
    }, {
        title: 'Materials',
        path: '/materials/'
    }, 
    {
        title: 'Services',
        path: '/services/'
    }, 
]

const Navbar = () => {
    const router = useRouter();
    const [open,
        setOpen] = useState(false);
    const [navbar,
        setNavbar] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 120) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    // const [isMouse, toggleMouse] = useState(false);
    const [subMenu, toggleSubMenu] = useState(false);


    let isPageWide = useMediaQuery('(max-width: 768px)')

    // const toggleSubMenu = () => {
    //   isPageWide ? toggleClick(!isClick) : toggleMouse(!isMouse);
    // };

    const handleClick = (e) => {
      e.preventDefault();
      toggleSubMenu(!subMenu)
    };

    const variants = isPageWide ? {
      open: { 
        opacity: 1, 
        x: 0, 
        display: 'flex' 
      },
      closed: { 
        opacity: 0, 
        x: '100%', 
        display: 'none' 
      },
    } : {
      closed: { opacity: 1, x: 0 },
    }

    const subMenuAnimate = isPageWide ? {
      enter: {
        opacity: 1,
        height: 'auto',
        transition: {
          duration: 0.5
        },
        display: "flex"
      },
      exit: {
        opacity: 0,
        height: 0,
        transition: {
          duration: 0.5,
          delay: 0
        },
        transitionEnd: {
          display: "none"
        }
      }
    } : {
      enter: {
        opacity: 1,
        y: "0",
        height: 'auto',
        transition: {
          duration: 0.5
        },
        display: "block"
      },
      exit: {
        opacity: 0,
        y: 0,
        height: 0,
        transition: {
          duration: 0.5,
          delay: 0.3
        },
        transitionEnd: {
          display: "none"
        }
      }
    };

    return (
        <header>
            <nav
                className={`${navbar
                ? styles.navContainer + " " + styles.scrolled
                : styles.navContainer}`}>
            <div className={styles.wrapper}>
                <Link href="/" passHref>
                    <span className={styles.logo}>
                        <Image src={logo} layout='responsive' className={styles.logoImg} priority alt="logo"/>
                    </span>
                </Link>
                <AnimatePresence>
                <motion.ul
                    initial="closed"
                    animate={open ? "open" : "closed"}
                    variants={variants}
                    transition={{
                      duration: 0.6,
                      ease: "linear"
                  }}
                    className={`${open
                    ? styles.list + " " + styles.open
                    : styles.list}`}
                    
                    >
                    {menu.map((item, index) => <li 
                    className={styles.listItem} 
                    key={index} 
                    >
                        <Link href={item.path} passHref>
                            <a
                                className={`${router.pathname === item.path
                                ? styles.active
                                : ''}`}
                                onClick={item.hasSubMenu ? (e) => handleClick(e) : () => toggleSubMenu(false)}
                                onTouchStart={ item.hasSubMenu ? () => 
                                  toggleSubMenu(true) : () => 
                                    null
                                }
                                onMouseEnter={ item.hasSubMenu && !isPageWide ? () => 
                                  toggleSubMenu(true) : null
                                }
                                onMouseLeave={ item.hasSubMenu && !isPageWide ? () => 
                                  toggleSubMenu(false) : null
                                }
                                >
                                {item.title} {item.hasSubMenu ? <span>&#9660;</span> : ""}
                            </a>
                        </Link>
                        {item.hasSubMenu ? 
                          <motion.ul
                          className={styles.subMenu}
                          initial="exit"
                          animate={() => subMenu ? "enter" : "exit"}
                          variants={subMenuAnimate}
                          onMouseEnter={ !isPageWide ? () => toggleSubMenu(true) : null
                          }
                          onMouseLeave={ !isPageWide ? () => toggleSubMenu(false) : null
                          }
                        >
                          {item.subMenu.map((sub, index) => 
                            <li 
                            key={index}
                            className={styles.subMenuItem}
                            >
                              <Link href={sub.path} passHref>
                            <a
                                className={`${router.pathname === sub.path
                                ? styles.active
                                : ''}`}>
                                {sub.title}
                            </a>
                        </Link>
                            </li>
                          )}
                        </motion.ul>
                        : ""}
                    </li>)}
                </motion.ul>
                </AnimatePresence>

                <Link
                href="/contact/"
                passHref
                >
                <a className={styles.quote}>GET A QUOTE</a>
                </Link>
                <div className={styles.mobileNav} onClick={() => setOpen(!open)}>
                  <div
                      className={`${open
                      ? styles.hamburger + " " + styles.open
                      : styles.hamburger}`}
                      >
                      <div className={styles.line}></div>
                      <div className={styles.line}></div>
                      <div className={styles.line}></div>
                  </div>
                  <span>MENU</span>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

import './SideBar.css'
import { useNavigate } from 'react-router-dom'


// IMAGES //
import avatarImg from '../../public/assets/image-avatar.png'

import logoImg from '../assets/logo.svg'
import CategoryMovie from '../assets/icon-nav-movies.svg?react'
import CategoryTv from '../assets/icon-nav-tv-series.svg?react'
import BookMark from '../assets/icon-nav-bookmark.svg?react'
import IconHome from '../assets/icon-nav-home.svg?react'

import { useMediaQuery } from '../customHooks/useMediaQuery'

// const whiteIconHome = iconHome

// FULL ICONS //
// import fullBookMark from '../../public/assets/icon-bookmark-full.svg'

export function SideBar({ currentPage, setCurrentPage }) {

    const navigate = useNavigate()

    const handleNavigation = (path) => {
        navigate(path)
        setCurrentPage(path)
    }

    const isSmallDevice = useMediaQuery('(max-width : 1200px)')

    const logWidth = () => {
        console.log(isSmallDevice)
    }

    return (
        <div className={isSmallDevice ? 'horizontal-sidebar' : 'sidebar'}>
            <div className="icon-logo">
                <img src={logoImg} alt="logo" />
            </div>
            <div className={isSmallDevice ? 'horizontal-navigation' : 'navigation'}>
                <IconHome className={`nav-icon ${currentPage === '/' ? 'chosen' : ''}`} onClick={() => handleNavigation('/')} />
                <CategoryMovie className={`nav-icon ${currentPage === '/movies' ? 'chosen' : ''}`} onClick={() => handleNavigation('/movies')} />
                <CategoryTv className={`nav-icon ${currentPage === '/tv-series' ? 'chosen' : ''}`} onClick={() => handleNavigation('/tv-series')} />
                <BookMark className={`nav-icon ${currentPage === '/bookmarks' ? 'chosen' : ''}`} onClick={() => handleNavigation('/bookmarks')} />
            </div>

            <div className="avatar">
                <img src={avatarImg} alt="avatar image" />
            </div>
        </div>
    )
}
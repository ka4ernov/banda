import React, { useContext } from 'react';
import UiContext from '../../../store/ui-context';

import SearchSVG from './../../../assets/SearchSVG';
import NotificationSVG from './../../../assets/NotificationSVG';
import ProfileImg from './../../../assets/profile.png';

import classes from './Header.module.scss';

const Header = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    const iconFill = uiCtx.theme === "light" ? "#03A9F4" : "#fff";

    return (
        <div className={classes.header}>
            <h2 className={`${classes.header__title} ${themeClass}`}>Статистика</h2>
            <div className={classes.header__content}>
                <div className={classes.header__content__links}>
                    <div className={classes.link__icon}>
                        <SearchSVG fillColor={iconFill}/>
                    </div>
                    <div className={`${classes.link__icon} ${classes.link__icon__notification}`}>
                        <NotificationSVG fillColor={iconFill}/>
                    </div>
                </div>
                <div className={`${classes.header__content__divider} ${themeClass}`} />
                <div className={classes.header__content__profile}>
                    <span className={`${classes.profile__name} ${themeClass}`}>Кирилл</span>
                    <div className={classes.profile__img}>
                        <img src={ProfileImg} alt="avatar" className={classes.img} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
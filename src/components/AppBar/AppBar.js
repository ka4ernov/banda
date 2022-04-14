import React, { useState, useContext } from 'react';
import UiContext from './../../store/ui-context';
import classes from './AppBar.module.scss';

import DashboardSVG from './../../assets/DashboardSVG';
import AllGamesSVG from './../../assets/AllGamesSVG';
import BilliardSVG from './../../assets/BilliardSVG';
import TableTennisSVG from './../../assets/TableTennisSVG';
import CardsSVG from './../../assets/CardsSVG';
import SettingsSVG from './../../assets/SettingsSVG';
import ToggleSwitch from '../../ui/ToggleSwitch';

const initialNavList = [
    {
        id: 0,
        text: "Обзор",
        isActive: true,
        icon: (fillColor) => <DashboardSVG fillColor={fillColor} />,
    },
    {
        id: 1,
        text: "Все игры",
        isActive: false,
        icon: (fillColor) => <AllGamesSVG fillColor={fillColor} />,
    },
    {
        id: 2,
        text: "Бильярд",
        isActive: false,
        icon: (fillColor) => <BilliardSVG fillColor={fillColor} />,
    },
    {
        id: 3,
        text: "Теннис",
        isActive: false,
        icon: (fillColor) => <TableTennisSVG fillColor={fillColor} />,
    },
    {
        id: 4,
        text: "Карты",
        isActive: false,
        icon: (fillColor) => <CardsSVG fillColor={fillColor} />,
    },
    {
        id: 5,
        text: "Настройки",
        isActive: false,
        icon: (fillColor) => <SettingsSVG fillColor={fillColor} />,
    },
];

const AppBar = () => {
    const uiCtx = useContext(UiContext);
    const [navList, setNavlist] = useState(initialNavList);

    const isActiveHandler = (id) => {
        const arr = [...navList];
        const inxOfActive = arr.find((item) => item.isActive === true).id;
        arr[inxOfActive].isActive = false;
        arr[id].isActive = true;
        setNavlist(arr);
    };

    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;
    return (
        <div className={`${classes.appbar__container} ${themeClass}`}>
            <div className={classes.appbar}>
                <div className={classes.appbar__logo}>
                    <div className={`${classes.appbar__logo__rect} ${themeClass}`}>Б</div>
                    <h1 className={classes.appbar__logo__title}>
                        Игры<span className={themeClass}>Банды</span>
                    </h1>
                </div>
                <ul className={classes.appbar__menu}>
                    {navList.map(({ id, text, isActive, icon }) => (
                        <li key={id} className={isActive ? classes.isActive : ""}>
                            <a
                                href={`#${text}`}
                                className={classes.link}
                                onClick={() => isActiveHandler(id)}
                            >
                                <div className={classes.link__icon}>
                                    {icon(
                                        isActive
                                            ? "#33c863"
                                            : uiCtx.theme === "light"
                                            ? "#929292"
                                            : "#fff"
                                    )}
                                </div>
                                <span className={`${classes.link__text} ${themeClass}`}>
                                    {text}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={`${classes.appbar__divider} ${themeClass}`} />
                <div className={classes.appbar__themetoggler}>
                    <ToggleSwitch toggle={uiCtx.toggleTheme} />
                    <span className={`${classes.toggle__title} ${themeClass}`}>Ночная тема</span>
                </div>
            </div>
        </div>
    );
};

export default AppBar;
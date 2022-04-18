import React, { useContext } from 'react'
import UiContext from '../../store/ui-context';

import classes from './Dashboard.module.scss';
import Header from './Header/Header';

const Dashboard = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;

    return (
        <div className={`${classes.scroll} ${themeClass}`}>
            <div className={`${classes.dashboard__container} ${themeClass}`}>
                <div className={classes.dashboard}>
                    <Header />
                </div>
            </div>
        </div>
    );
}

export default Dashboard
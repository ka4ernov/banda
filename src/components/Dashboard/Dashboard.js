import React, { useContext } from 'react'
import UiContext from '../../store/ui-context';

import classes from './Dashboard.module.scss';

const Dashboard = () => {
    const uiCtx = useContext(UiContext);
    const themeClass = uiCtx.theme === "light" ? classes.light__mode : classes.dark__mode;

    return (
        <div className={`${classes.scroll} ${themeClass}`}>
            <div className={`${classes.dashboard__container} ${themeClass}`}>
                <div className={classes.dashboard}></div>
            </div>
        </div>
    );
}

export default Dashboard
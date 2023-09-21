import { Outlet } from 'react-router-dom';
import style from './Header.module.scss';
import TemaPadrao from 'styles/TemaPadrao.module.scss';

export default function Header() {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
                    Sua casa fora de casa
                </div>
            </header>
            <div className={TemaPadrao.container}>
                <Outlet/>
            </div>
        </>
    );
}
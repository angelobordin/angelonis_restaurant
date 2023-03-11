import style from './Menu.module.scss';
import { ReactComponent as Logo} from 'assets/imgs/logo.svg';

export default function Menu() {
    return (
        <main>
            <nav className={style.menu}>
                <Logo width={152} height={64}/>
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    Sua casa fora de casa
                </div>
            </header>
        </main>
    )
}
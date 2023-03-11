import style from './Menu.module.scss';
import { ReactComponent as Logo} from 'assets/imgs/logo.svg';
import Searcher from './searcher/searcher';
import { useState } from 'react';

export default function Menu() {
    const [search, setSearch] = useState('');

    return (
        <main>
            <nav className={style.nav}>
                <Logo width={152} height={64}/>
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    Sua casa fora de casa
                </div>
            </header>
            <section className={style.menu}>
                <h3 className={style.menu__titulo}>Cardápio</h3>
                <Searcher search={search} setSearch={setSearch}/>
            </section>
        </main>
    )
}
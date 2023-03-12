import style from './Menu.module.scss';
import { ReactComponent as Logo} from 'assets/imgs/logo.svg';
import Searcher from './searcher/searcher';
import { useState } from 'react';
import Filters from './filters/filters';
import Order from './order/order';
import ItemList from './itens/itemList';

export default function Menu() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState('');

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
                <h3 className={style.menu__title}>Cardápio</h3>
                <Searcher search={search} setSearch={setSearch}/>
                <div className={style.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                    <Order order={order} setOrder={setOrder} />
                </div>
                <ItemList/>
            </section>
        </main>
    )
}
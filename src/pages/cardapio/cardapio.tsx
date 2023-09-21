import style from './Cardapio.module.scss';
import Searcher from '../cardapio/searcher/searcher';
import { useState } from 'react';
import Filters from '../cardapio/filters/filters';
import Order from '../cardapio/order/order';
import ItemList from './itemList/itemList';
import TemaPadrao from 'styles/TemaPadrao.module.scss';

export default function Cardapio() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState('');

    return (
        <section className={style.menu}>
            <h3 className={TemaPadrao.title}>Cardápio</h3>
            <Searcher search={search} setSearch={setSearch}/>
            <div className={style.menu__filters}>
                <Filters filter={filter} setFilter={setFilter}/>
                <Order order={order} setOrder={setOrder} />
            </div>
            <ItemList search={search} filter={filter} order={order}/>
        </section>
    );
}
import ITem from 'interfaces/ITem';
import { useEffect, useState } from 'react';
import Item from '../../cardapio/itemList/item/item';
import cardapio from 'data/cardapio.json';
import style from './ItemList.module.scss';

enum ORDER {
    NULL = '',
    SIZE = 'porcao',
    QTD_PESSOAS = 'qtd_pessoas',
    PRICE = 'price'
}

interface IFilterProps {
    search: string,
    filter: number | null,
    order: string
}

export default function Itens(props: IFilterProps) {
    const [list, setList] = useState(cardapio);
    const { search, filter, order } = props;

    function filterBySearch(title: string) {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    }

    function filterByCategory(id: number) {
        if (filter !== null) return id === filter;
        return true;
    }

    function toSort(listToSort: ITem[]) {
        switch (order) {
        case ORDER.PRICE:
            return listToSort.sort((a, b) => a.price > b.price ? 1 : -1);
        case ORDER.QTD_PESSOAS:
            return listToSort.sort((a, b) => a.serving > b.serving ? 1 : -1);
        case ORDER.SIZE:
            return listToSort.sort((a, b) => a.size > b.size ? 1 : -1);
        default:
            return listToSort;
        }
    }

    useEffect(() => {
        const newList = cardapio.filter(item => filterBySearch(item.title) && filterByCategory(item.category.id));
        setList(toSort(newList));
    }, [search, filter, order]);

    return (
        <div className={style.itemList}>
            {list.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    );
}
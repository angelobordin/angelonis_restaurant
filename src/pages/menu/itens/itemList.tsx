import Item from './item/item';
import cardapio from './itemList.json';
import style from './ItemList.module.scss';

export default function Itens() {
    return (
        <div className={style.itemList}>
            {cardapio.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}
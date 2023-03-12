import style from './Item.module.scss';
import ITem from 'interfaces/ITem';

export default function Item(itemData: ITem) {
    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={itemData.photo} alt={itemData.title}/>
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>{itemData.title}</h2>
                    <p>{itemData.description}</p>
                </div>
                <div className={style.item__tags}>
                    <div className={`${style.item__tipo} ${style[`item__tipo__${itemData.category.label.toLowerCase()}`]}`}>
                        {itemData.category.label}
                    </div>
                    <div className={style.item__porcao}>
                        {itemData.size}g
                    </div>
                    <div className={style.item__qtdpessoas}>
                        Serve {itemData.serving} pessoa{itemData.serving > 1 ? 's' : ''}
                    </div>
                    <div className={style.item__valor}>
                        R$ {itemData.price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}
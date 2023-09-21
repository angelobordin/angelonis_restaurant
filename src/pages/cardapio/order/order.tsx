import style from './Order.module.scss';
import options from './options.json';
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface IOrderProps {
    order: string,
    setOrder: React.Dispatch<React.SetStateAction<string>>
}

export default function Order(props: IOrderProps) {
    const { order, setOrder } = props;
    const [inUse, setUse] = useState(false);
    const orderName = order && options.find(option => option.value === order)?.nome;

    return (
        <button className={`${style.order} ${order !== '' ? style['order--ativo'] : '' }`} onClick={() => setUse(!inUse)} onBlur={() => setUse(false)}>
            <span>{orderName || 'Ordenar Por'}</span>
            {inUse ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
            <div className={`${style.order__options} ${inUse ? style['order__options--ativo'] : '' }`}>
                {options.map(option => (
                    <div className={style.order__option} key={option.value} onClick={() => setOrder(option.value)}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    );
}
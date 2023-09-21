import React from 'react';
import filters from './filters.json';
import style from './Filters.module.scss';
// type IFilter = typeof filters[0];

interface IFilterProps {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

interface IFilter {
    id: number,
    label: string
}

export default function Filters(props: IFilterProps) {
    const { filter, setFilter } = props;

    function selectFilter(option: IFilter) {
        if (filter === option.id) return setFilter(null);
        return setFilter(option.id);
    }

    return (
        <div className={style.filters}>
            {filters.map(option => (
                <button className={`${style.filters__filter} ${filter === option.id ? style['filters__filter--ativo'] : '' }`} key={option.id} onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    );
}
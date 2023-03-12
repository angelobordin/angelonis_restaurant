import React from "react"
import style from './Searcher.module.scss';
import { CgSearch } from 'react-icons/cg';

interface ISearchProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Searcher(props: ISearchProps) {
    const { search, setSearch } = props;

    function filterItem(search: string) {
        console.log(search);
    }

    return(
        <div className={style.buscador}>
            <input value={search} onChange={event => {setSearch(event.target.value); filterItem(event.target.value)}} placeholder="Search"/>
            <CgSearch size={20} color="#4C4D5E"/>
        </div>
    )
}
import React from "react"

interface ISearchProps {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function Searcher(props: ISearchProps) {
    const { search, setSearch } = props;
    return(
        <div></div>
    )
}
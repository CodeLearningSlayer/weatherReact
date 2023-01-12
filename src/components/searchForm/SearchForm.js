import "./searchForm.scss"

const SearchForm = () => {

    return (
        <div className="search">
            <input type="text" placeholder="Another location" className="search__input"/>
            <button className="search__btn"></button>
        </div>
    )
}

export default SearchForm;
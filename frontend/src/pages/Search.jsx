import '../styles/search.css'

const filters = ["drama", "sci-fi", "crime", "romance", "animation"];

export default function Search() {
    return (
        <>
            <div className="search-box">
                <input className='search-input' type="text" placeholder='🔍︎  Search movies...' />
            
            <div className="filter-group">
                <button class="filter-btn active" data-genre="all">All</button>
                {filters.map((filter) => (
                    <button key={filter} className="filter-btn">
                        {filter}
                    </button>
                ))}
            </div></div>
        </>
    );
}
import { SearchIcon } from "../Svg";

const SearchComponent = () => {
    return (
        <div className="cm_search">
            <input
                type="text"
                placeholder="What are you looking here eg. freelancer, projects" />
            <span className="btn btn-dark"><SearchIcon /></span>
        </div>
    )
}

export default SearchComponent;
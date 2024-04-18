import "./SearchBox.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

function SearchBox() {
  return (
    <div className="search-box">
      <input type="search" placeholder="Search..." />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
}

export default SearchBox;

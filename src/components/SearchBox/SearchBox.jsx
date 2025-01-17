import sboxStyles from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ value, onFindName }) => {
  const searchFieldId = useId();
  return (
    <div className={sboxStyles["search-container"]}>
      <label htmlFor={searchFieldId}> Find contacts by name</label>
      <input
        className={sboxStyles["search-field"]}
        id={searchFieldId}
        type="text"
        value={value}
        onChange={(e) => onFindName(e.target.value)}
        placeholder="....."
      />
    </div>
  );
};

export default SearchBox;

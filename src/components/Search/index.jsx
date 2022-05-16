import "./styles.scss";
import * as Constant from "constants";
import {
  getSearchedRecipes,
  setListingMode,
  setSearchQuery,
} from "features/recipe/recipeSlice";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((state) => state.recipe);

  const onChangeHandler = (e) => {
    dispatch(setListingMode(Constant.LISTING_MODE_SEARCH));
    dispatch(setSearchQuery(e.currentTarget.value));
    dispatch(getSearchedRecipes(searchQuery));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-box"
        placeholder="Type something..."
        value={searchQuery}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default Search;

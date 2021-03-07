import { connect } from "react-redux";
import { SearchEmp } from "../presentation/Search";
import actions from "../../actions/appActions";

const { getSearchResult } = actions;

export default connect(
  (state, props) => {
    const { results } = state;
    return { results };
  },
  { getSearchResult }
)(SearchEmp);

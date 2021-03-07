import { connect } from "react-redux";
import { Overview } from "../presentation/Overview";

export default connect((state, props) => {
  const { results, employeeName } = state;
  return {
    results,
    employeeName
  };
}, {})(Overview);

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "antd";

const { Search } = Input;

export function SearchEmp(props) {
  const history = useHistory();
  const { getSearchResult, results } = props;

  useEffect(() => {
    if (results && results.length) {
      history.push("/overview");
    }
  }, [results]);

  const onSearch = (searchStr) => {
    if (searchStr && searchStr.length) {
      getSearchResult(searchStr);
    }
  };
  return (
    <div className="search-box">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        className="search-input"
        onSearch={onSearch}
      />
    </div>
  );
}

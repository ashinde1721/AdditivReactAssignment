import React from "react";

export function Overview(props) {
  const { results, employeeName } = props;
  return (
    <div className="overview">
        { employeeName ? <> 
            <h1>Employee Overview</h1>
            <div className="search-str">Subordinates of employee <b>{employeeName}</b>:</div></>
        : null}
      <ol>
        {(results || []).map((res) => (
          <li className="text-left" key={res}>{res}</li>
        ))}
      </ol>
    </div>
  );
}

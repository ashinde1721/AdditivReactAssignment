import axios from "axios";
import APPLICATION_TYPES from "../types/appTypes";

let results = [];

function saveResults(data) {
  return {
    type: APPLICATION_TYPES.SAVE_RESULTS,
    payload: data,
  };
}

const actions = {
  getSearchResult: (employeeName) => {
    return (dispatch, getState) => {
      getSuppordinates(employeeName).then((data) => {
        if (data && data.length) {
          const searchResults = { results: data, employeeName };
          dispatch(saveResults(searchResults));
        }
      });
    };
  },
};

async function getSuppordinates(employeeName) {
  const url = `http://api.additivasia.io/api/v1/assignment/employees/${employeeName}`;
  try {
    const data = await axios.get(url).then((response) => response.data);
    const directSubordinates = data[1] ? data[1]["direct-subordinates"] : [];
    let i = 0;
    results = [...results, ...directSubordinates];
    do {
      if (directSubordinates[i]) {
        await getSuppordinates(directSubordinates[i]);
      }
      i++;
    } while (i < directSubordinates.length);
    return [...new Set(results)];
  } catch (err) {
    console.log(err);
  }
}

export default actions;

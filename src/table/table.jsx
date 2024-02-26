import React, { useState, useEffect } from "react";

export default function () {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [dispTable, setDispTable] = useState(tableData);
  const [date, setDate] = useState(true);
  const [view, setView] = useState(true);
  //   const [newTable, setNewTable] = useState(dispTable);

  const dateSort = (tableData) => {
    const s = tableData.sort((a, b) => {
      if (a.date > b.date) return -1;
      else if (a.date < b.date) return 1;
      else {
        if (a.views > b.views) return -1;
        else if (a.views < b.views) return 1;
        else return b - a;
      }
    });
    setDispTable(s);
  };

  const viewSort = (tableData) => {
    const s = tableData.sort((a, b) => {
      if (a.views > b.views) return -1;
      else if (a.views < b.views) return 1;
      else {
        if (a.date > b.date) return -1;
        else if (a.date < b.date) return 1;
        else return b - a;
      }
    });
    setDispTable(s);
  };

  useEffect(() => {
    dateSort(tableData);
  }, [date]);

  useEffect(() => {
    viewSort(tableData);
  }, [view]);

  return (
    <>
      <h1>Date and Views Table</h1>
      <button
        onClick={() => {
          setDate(!date);
        }}
      >
        Sort by Date
      </button>
      <button
        onClick={() => {
          setView(!view);
        }}
      >
        Sort by Views
      </button>
      <div>
        <table>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
          {dispTable.map((ele) => {
            return (
              <tr>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

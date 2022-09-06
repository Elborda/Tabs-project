import React, { useEffect, useState } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";

const Tabs = () => {
  const [data, setData] = useState([]);
  const [eachUser, setEachUser] = useState(0);

  const names = data.map((info) => {
    return info.company;
  });

  useEffect(() => {
    const dataFetched = async () => {
      const data = await fetch("https://course-api.com/react-tabs-project");
      const dataJson = await data.json();
      setData(dataJson);
    };
    dataFetched();
  }, []);

  const persona = (parametro) => {
    if (parametro === 0) {
      setEachUser(parametro);
    } else if (parametro === 1) {
      setEachUser(parametro);
    } else if (parametro === 2) {
      setEachUser(parametro);
    }
  };

  return (
    <>
      <div className="header--container">
        <h1>Experience</h1>
        <div className="underline"></div>
      </div>
      <section className="flex--container">
        <div className="buttons">
          {names.map((info, index) => {
            return (
              <button
                onClick={() => {
                  persona(index);
                }}
                key={index}
              >
                {info}
              </button>
            );
          })}
        </div>
        <div className="about--container">
          <div className="about--info">
            <h3>{data[eachUser]?.title}</h3>
            <h4>{data[eachUser]?.company}</h4>
            <p className="dates">{data[eachUser]?.dates}</p>
            {data.map((info, index) => {
              return (
                <div key={index} className="description">
                  <BsChevronDoubleRight />
                  <p>{info.duties[eachUser]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="more--info">
        <button>MORE INFO</button>
      </div>
    </>
  );
};

export default Tabs;

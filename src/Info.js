import React from "react";

function Info(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="cardBox">
            <ul className="list-group list-group-horizontal-md list-group-mine">
              <li className="list-group-item">
                <h5 id="tRecover">Total Recovered</h5>

                <h6 id="tRecover-num">{props.worldwide.TotalRecovered}</h6>
              </li>
              <li className="list-group-item">
                <h5 id="tDeath">Total Deaths</h5>

                <h6 id="tDeath-num">{props.worldwide.TotalDeaths}</h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Info;

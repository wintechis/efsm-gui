import React, { useEffect, useState } from 'react';

function App() {
  const [armState, setArmState] = useState({
    pos: 1,
    closed: true,
    item: false
  });

  useEffect(() => {
    const interval = setInterval(() =>
      fetch('http://localhost:8080/json').then(data => data.json()).then(newState => {
        console.log(newState)
        setArmState({
          pos: newState['pos'] as number,
          closed: newState['closed'] as boolean,
          item: newState['item'] as boolean
        });
      }), 50);
    return () => clearInterval(interval);
  }, [armState]);

  let deliverDisabled = armState.pos !== 1 || armState.closed !== false || armState.item !== true ? " disabled" : "";
  let produceDisabled = armState.pos !== 3 || armState.closed !== false || armState.item !== false ? " disabled" : "";
  return (
    <div className="container-fluid">
      <div className="row my-5 mx-3">
        <div className="col mx-3">
          <div className="row">
            <div className="col text-center">
              <RobotArm pos={armState.pos} closed={armState.closed} item={armState.item} />
            </div>
          </div>
          <div className="row my-5">
            <div className="col text-center">
              <div className="row">
                <div className="col">
                  <button type="button" className={"btn btn-lg btn-secondary" + deliverDisabled}>Deliver Item</button>
                </div>
                <div className="col">
                  <button type="button" className={"btn btn-lg btn-primary" + produceDisabled}>Produce Item</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 mx-3">
          <h1>
            Position:
          </h1>
          <h1>
            Closed:
          </h1>
          <h1>
            Item:
          </h1>
        </div>
        <div className="col mx-3">
          <h1>
            {armState.pos}
          </h1>
          <h1>
            {armState.closed ? "true" : "false"}
          </h1>
          <h1>
            {armState.item ? "true" : "false"}
          </h1>
        </div>
      </div>
    </div>
  );
}

interface RobotArmProps {
  pos: number,
  closed: boolean,
  item: boolean,
}

function RobotArm(props: RobotArmProps) {
  let svg = <svg width={800} height={800} version="1.1" xmlns="http://www.w3.org/2000/svg" ></svg>
  if(props.pos === 1) {
    if(props.closed) {
      if(props.item) {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-7-0-6-1" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-1-0-6-5" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-11-5-7-9" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <g transform="translate(2.9741 17.068)">
            <path transform="scale(-1,1)" d="m-30.41 361.87h15.179v15.179h-15.179z" fill="#000080" stopColor="#000000" strokeWidth="3.7946"/>
            <path d="m91.711 300.48-14.539 31.51-31.991 15.019 5.0951 13.869-15.862 6.1399m10.767-20.009-13.822-4.9804-6.4568 15.876" fill="none" markerEnd="url(#DotS-11-5-7-9)" markerMid="url(#DotS-1-4-1-0-6-5)" markerStart="url(#marker1391-8-0-7-0-6-1)" stroke="#000002" strokeWidth="3.795"/>
            </g>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      } else {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
           <defs>
            <marker id="marker1391-8-0-7-0-6-1-2" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-1-0-6-5-2" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-11-5-7-9-0" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <path d="m94.685 317.55-14.539 31.51-31.991 15.019 5.0951 13.869-15.862 6.1399m10.767-20.009-13.822-4.9804-6.4568 15.876" fill="none" markerEnd="url(#DotS-11-5-7-9-0)" markerMid="url(#DotS-1-4-1-0-6-5-2)" markerStart="url(#marker1391-8-0-7-0-6-1-2)" stroke="#000002" strokeWidth="3.795"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      }
    } else {
      if(props.item) {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-1-9-5" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-6-7-9" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-8-6-1" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <path d="m94.685 317.55-14.539 31.51-31.991 15.019 5.0951 13.869c-11.001 11.001-11.151 10.851-11.151 10.851m6.056-24.72-13.822-4.9804-11.166 11.166" fill="none" markerEnd="url(#DotS-8-6-1)" markerMid="url(#DotS-1-4-6-7-9)" markerStart="url(#marker1391-8-0-1-9-5)" stroke="#000002" strokeWidth="3.795"/>
            <path d="m33.384 378.94h-15.179v15.179h15.179z" fill="#000080" stopColor="#000000" strokeWidth="3.7946"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      } else {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-1-9-5" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-6-7-9" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-8-6-1" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <path d="m94.685 317.55-14.539 31.51-31.991 15.019 5.0951 13.869c-11.001 11.001-11.151 10.851-11.151 10.851m6.056-24.72-13.822-4.9804-11.166 11.166" fill="none" markerEnd="url(#DotS-8-6-1)" markerMid="url(#DotS-1-4-6-7-9)" markerStart="url(#marker1391-8-0-1-9-5)" stroke="#000002" strokeWidth="3.795"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      }
    }
  } else if(props.pos === 2) {
    if(props.closed) {
      if(props.item) {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-7-0" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-1-0" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-11-5" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <g transform="translate(-291.99 23.074)">
            <path transform="rotate(45)" d="m542.95-3.8062h15.179v15.179h-15.179z" fill="#000080" stopColor="#000000" strokeWidth="3.7946"/>
            <path d="m386.68 294.47v34.629 31.173l-13.409 6.2038 6.8749 15.558m6.5345-21.762 13.295 6.252-6.6601 15.791" fill="none" markerEnd="url(#DotS-11-5)" markerMid="url(#DotS-1-4-1-0)" markerStart="url(#marker1391-8-0-7-0)" stroke="#000002" strokeWidth="3.795"/>
            </g>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      } else {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-7-0-63" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-1-0-3" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-11-5-4" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <path d="m94.685 317.55v34.629 31.173l-13.409 6.2038 6.8749 15.558m6.5345-21.762 13.295 6.252-6.6601 15.791" fill="none" markerEnd="url(#DotS-11-5-4)" markerMid="url(#DotS-1-4-1-0-3)" markerStart="url(#marker1391-8-0-7-0-63)" stroke="#000002" strokeWidth="3.795"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      }
    } else {
      svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="marker1391-8-0-1" overflow="visible" orient="auto">
          <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
          </marker>
          <marker id="DotS-1-4-6" overflow="visible" orient="auto">
          <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
          </marker>
          <marker id="DotS-8" overflow="visible" orient="auto">
          <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
          </marker>
        </defs>
        <g transform="translate(-15.231 -290.1)">
          <path d="m94.685 317.55v34.629 31.173l-13.409 6.2038c0 15.558 0.21196 15.558 0.21196 15.558m13.197-21.762 13.295 6.252v15.791" fill="none" markerEnd="url(#DotS-8)" markerMid="url(#DotS-1-4-6)" markerStart="url(#marker1391-8-0-1)" stroke="#000002" strokeWidth="3.795"/>
        </g>
        <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
        <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
        <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
      </svg>
    }
  } else {
    if(props.closed) {
      if(props.item) {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-7-0-6" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-1-0-6" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-11-5-7" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <g transform="translate(-594.12 19.852)">
            <path d="m750.11 359.09h15.179v15.179h-15.179z" fill="#000080" stopColor="#000000" strokeWidth="3.7946"/>
            <path d="m688.81 297.7 14.539 31.51 31.991 15.019-5.0951 13.869 15.862 6.1399m-10.767-20.009 13.822-4.9804 6.4568 15.876" fill="none" markerEnd="url(#DotS-11-5-7)" markerMid="url(#DotS-1-4-1-0-6)" markerStart="url(#marker1391-8-0-7-0-6)" stroke="#000002" strokeWidth="3.795"/>
            </g>
            <path d="m155.99 378.94h15.179v15.179h-15.179z" fill="#000080" stopColor="#000000" strokeWidth="3.7946"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      } else {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-7-0-6" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-1-0-6" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-11-5-7" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <path d="m94.685 317.55 14.539 31.51 31.991 15.019-5.0951 13.869 15.862 6.1399m-10.767-20.009 13.822-4.9804 6.4568 15.876" fill="none" markerEnd="url(#DotS-11-5-7)" markerMid="url(#DotS-1-4-1-0-6)" markerStart="url(#marker1391-8-0-7-0-6)" stroke="#000002" strokeWidth="3.795"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      }
    } else {
      if(props.item) {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-1-9" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-6-7" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-8-6" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <path d="m94.685 317.55 14.539 31.51 31.991 15.019-5.0951 13.869c11.001 11.001 11.151 10.851 11.151 10.851m-6.056-24.72 13.822-4.9804 11.166 11.166" fill="none" markerEnd="url(#DotS-8-6)" markerMid="url(#DotS-1-4-6-7)" markerStart="url(#marker1391-8-0-1-9)" stroke="#000002" strokeWidth="3.795"/>
            <path d="m155.99 378.94h15.179v15.179h-15.179z" fill="#000080" stopColor="#000000" strokeWidth="3.7946"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      } else {
        svg = <svg width="800" height="800" version="1.1" viewBox="0 0 158.75 158.75" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="marker1391-8-0-1-9" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-1-4-6-7" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
            <marker id="DotS-8-6" overflow="visible" orient="auto">
            <path transform="matrix(.2 0 0 .2 1.48 .2)" d="m-2.5-1c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z" fill="context-stroke" fillRule="evenodd" stroke="context-stroke" strokeWidth="1pt"/>
            </marker>
          </defs>
          <g transform="translate(-15.231 -290.1)">
            <path d="m94.685 317.55 14.539 31.51 31.991 15.019-5.0951 13.869c11.001 11.001 11.151 10.851 11.151 10.851m-6.056-24.72 13.822-4.9804 11.166 11.166" fill="none" markerEnd="url(#DotS-8-6)" markerMid="url(#DotS-1-4-6-7)" markerStart="url(#marker1391-8-0-1-9)" stroke="#000002" strokeWidth="3.795"/>
          </g>
          <rect y="104.01" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect x="137.58" y="103.98" width="21.167" height="54.769" fill="#999" stopColor="#000000" strokeWidth="3.6154"/>
          <rect width="158.75" height="158.75" style={{fillOpacity: "0", stroke: "black", strokeWidth: "1pt"}}/>
        </svg>
      }
    }
  }
  return svg;
}

export default App;

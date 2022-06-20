import React from "react";

import "./index.scss";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return (
    <>
      <div className="row bd-title">
        <div className="col-md-3  d-none d-md-block">
          <div className="hr-line"></div>
        </div>
        <div className="col-md-6">
          <h2>{props.text}</h2>
        </div>
        <div className="col-md-3 d-none d-md-block">
          <div className="hr-line"></div>
        </div>
      </div>
    </>
  );
};

export default Title;

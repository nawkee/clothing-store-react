import React from "react";

import Directory from "../../components/directory/Directory";

import "./home-page.scss";

const HomePage = ({ history }) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;

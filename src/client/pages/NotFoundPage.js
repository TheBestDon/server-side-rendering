import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div>
      <h1>Oooops, route not found.</h1>
    </div>
  );
};

export default {
  component: NotFoundPage
};

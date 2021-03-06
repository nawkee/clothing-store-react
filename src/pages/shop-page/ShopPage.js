import React from "react";
import { Route } from "react-router-dom";

import "./shop-page.scss";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection-page/CollectionPage";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;

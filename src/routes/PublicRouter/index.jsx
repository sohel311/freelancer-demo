import React from "react";
import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import { publicRouteList } from "../../routes";

const BaseLayout = React.lazy(() => import("../../layout/BaseLayout"));

const publicRouter = (handleNavigate) => {
  const PublicRoutes = ({ children }) => {
    // let token = isAuthenticated();
    // if (token) {
    //     return <Navigate to={'/user'} />;
    // }
    return children;
  };

  return publicRouteList.map(
    ({ component: Component, path, title, background, layout = true }, key) => {
      switch (layout) {
        case "default": {
          return (
            <Route
              path={path}
              element={
                <PublicRoutes>
                  <>
                    <Helmet>
                      <title>{title}</title>
                    </Helmet>
                    <BaseLayout
                      background={background}
                      title={title}
                      handleNavigate={handleNavigate}
                    >
                      <Component handleNavigate={handleNavigate} />
                    </BaseLayout>
                  </>
                </PublicRoutes>
              }
              key={key}
            />
          );
        }
        default: {
          return (
            <Route
              path={path}
              element={
                <PublicRoutes>
                  <>
                    <Helmet>
                      <title>{title}</title>
                    </Helmet>
                    <Component handleNavigate={handleNavigate} />
                  </>
                </PublicRoutes>
              }
              key={key}
            />
          );
        }
      }
      return (
        <Route
          path={path}
          element={
            <PublicRoutes>
              <>
                <Helmet>
                  <title>{title}</title>
                </Helmet>
                <BaseLayout
                  background={background}
                  title={title}
                  handleNavigate={handleNavigate}
                >
                  <Component handleNavigate={handleNavigate} />
                </BaseLayout>
              </>
            </PublicRoutes>
          }
          key={key}
        />
      );
    }
  );
};

export default publicRouter;

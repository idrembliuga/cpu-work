import React from "react";
import Container from "../containers/ApplicationContainer";
import "./style/HomePage.scss";
function Home() {
  return (
    <>
      <div className=" home">
        <Container>
          <div className="jumbotron title-container">
            <h1 className="display-4 center-element">
              Hello and Welcome to CpuWork!
            </h1>
            <p className="lead center-element">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p className="center-element">
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <div className="flex-element">
              <a
                className="btn btn-primary btn-lg center-element"
                href="#"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;

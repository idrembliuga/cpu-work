import React from "react";
import Container from "../containers/ApplicationContainer";
function Home() {
  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/Others/images/76.webp)",
          height: "100vh",
        }}
      >
        <Container>
          <div className="jumbotron">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <hr className="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
const Main = () => {
  console.log('working');
  // mx - 2;
  return (
    <div
      className="container text-light px-4"
    >
      <h6 className="text-font-family-navbar text-secondary fw-bold">Hi, my name is</h6>
      <h2 className="card-title text-light fs-1 fw-bold">Mariana Usuga.</h2>
      <h2 className="fs-1 fw-bold text-secondary">I build things for the web.</h2>
      <p className="fs-6">
        I’m a software engineer specializing in building (and occasionally designing)
        exceptional digital experiences. Currently, I’m focused on building accessible,
        human-centered products at
      </p>
      <div>
        <button className="btn btn-outline-secondary" type="button">Get In Touch</button>
      </div>
    </div>
  );
};

export default Main;

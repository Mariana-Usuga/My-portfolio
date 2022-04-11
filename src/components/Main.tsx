import '../styles/style.css';

const Main = () => (
  <div
    className="text-light mx-md-5 mx-4"
  >
    <h6 className="text-font-family-navbar text-secondary fw-bold">Hi, my name is</h6>
    <h2 className="card-title text-light fs-1 fw-bold">Mariana Usuga.</h2>
    <h2 className="fs-1 fw-bold text-secondary">I build things for the web.</h2>
    <p className="fs-5 text-light" style={{ maxWidth: '540px' }}>
      React and NodeJS developer building excellent user experiences with the MERN stack.
      I bring well-tested and clean code to the companies and have worked effectively with
      distributed/remote teams.
    </p>
    <div>
      <button className="btn btn-outline-secondary mx-5" type="button">
        Get In Touch
      </button>
    </div>
  </div>
);

export default Main;

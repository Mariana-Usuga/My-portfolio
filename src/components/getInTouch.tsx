/* eslint-disable jsx-a11y/anchor-is-valid */
const GetInTouch = () => (
  <div className=" margin-top-aboutMe" id="Contact" style={{ marginBottom: '200px' }}>
    <div
      className="row text-center"
      id="Contact"
    >
      <h5
        className="col-11 card-title text-light m-3 "
        style={{ fontSize: '40px' }}
      >
        Get In Touch
      </h5>
      <p
        className="col-12 col-sm-6 text-success center-aboutMe fs-5"
      >
        I’m looking for new challenges in my field, I would love to share more
        of my experience with you. Please, feel free to write me by email
      </p>
      <div className="col-12 mt-4">
        <button
          type="button"
          className=" btn btn-outline-secondary p-3 px-4
         mx-5 m-3 mb-5"
        >
          <a href="mailto:marianausugamontoya12344@gmail.com" style={{ color: 'white' }}>
            Say Hello
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default GetInTouch;

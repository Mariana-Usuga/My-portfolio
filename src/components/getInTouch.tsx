const GetInTouch = () => (
  <div
    className=" margin-top-aboutMe"
    id="Contact"
    style={{ marginBottom: '200px', fontFamily: 'Preahvihear' }}
  >
    <div className="row text-center" id="Contact">
      <div
        className="col-12 card-title text-light m-3 "
        style={{ fontSize: '34px' }}
      >
        Get In Touch
      </div>
      <div
        className="col-12 col-sm-6 text-success center-aboutMe"
        style={{ fontSize: '18px' }}
      >
        I’m looking for new challenges in my field, I would love to share more
        of my experience with you. Please, feel free to write me by email
      </div>
      <div className="col-12 mt-4">
        <button type="button" className=" btn btn-outline-secondary p-3 m-3">
          <a
            href="mailto:musugamontoya@gmail.com"
            style={{ color: 'white', fontSize: '18px' }}
          >
            Say Hello
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default GetInTouch;

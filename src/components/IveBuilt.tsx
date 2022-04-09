/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/anchor-is-valid */
const IveBuilt = () => {
  console.log('working');
  return (
    <div
      className="text-success mt-5 center-aboutMe div-main"
      // style={{ width: '80%' }}
    >
      <div>
        <h3>Some Things I&apos;ve Built</h3>
      </div>
      <div
        className=""
        // style={{ backgroundColor: 'red' }}
      >
        <div
          className="img-built"
        >
          <img
            src="https://res.cloudinary.com/db3njhxi0/image/upload/v1645838858/jnbkpsaqgk60yslhiko6.jpg"
            alt=""
          />
        </div>
        <div className="descr mt-4">
          <div
            className="text-end"
            style={{ fontSize: '28px', width: '90%' }}
          >
            <h5>Halcyon Theme</h5>
            <h4 className="text-end">Featured Project</h4>
          </div>
          {/* <div > */}
          <p
            className="rounded p-3 prr text-end"
            style={{ backgroundColor: 'rgb(17, 24, 39)' }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem consectetur magni iste nam rem. Quas qui dignissimos officia,
            voluptas id cum, facere veniam cupiditate excepturi molestiae culpa placeat harum eos!
          </p>
          {/* </div> */}
          <div>
            <ul className="d-flex">
              <li>React</li>
              <li>Redux</li>
              <li>NodeJS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IveBuilt;
{ /* <div
      // className="center-aboutMe
      // margin-top-aboutMe bg-primary boder-primary mx-3"
      // id="Work"
    // >
    //   <h5 className="card-title fs-2 mb-4 text-light ps-2 mb-3">
    //     Some Things Ive Built
    //   </h5>
    //   <div
    //     className="text-success row g-0"
    //     style={{
    //     // backgroundColor: 'yellow',
    //     // width: '400px',
    //       marginBottom: '100px',
    //     }}
    //   >
    //     <div className="col-md-6">
    //       <img
    //         className="img_project1"
    //         // style={{ width: '0' }}
    //         src="https://res.cloudinary.com/db3njhxi0/image/upload/v164
    5838858/jnbkpsaqgk60yslhiko6.jpg"
    //         alt=""
    //       />
    //     </div>
    //     <div
    //       className="card-body col-md-6 text-left project1"
    //       style={{ color: '#a8b2d1' }}
    //     >
    //       {/* <div className="project1_background"> */ }
//       <p>Featured Project</p>
//       <h5 className="card-title">Maket Pul</h5>
//       <p className="card-text">
//         A minimal, dark blue theme for VS Code, Sublime Text,
//         Atom, iTerm, and more. Available on
//       </p>
//       <ul className="d-flex flex-wrap" style={{ listStyleType: 'none' }}>
//         <li className="p-2 bd-highlight">VS Code</li>
//         <li className="p-2 bd-highlight">React</li>
//         <li className="p-2 bd-highlight">NodeJS</li>
//         <li className="p-2 bd-highlight">Express</li>
//         <li className="p-2 bd-highlight">SASS</li>
//       </ul>
//       <div>
//         <a href="git">git</a>
//         <a href="abrir">abrir</a>
//       </div>
//     </div>

//   </div>
// </div> */}
// </div>

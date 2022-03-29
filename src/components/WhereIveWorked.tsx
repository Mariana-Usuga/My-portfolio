/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import ScrollHorizontal from './ScrollHorizontal';

const WhereIveWorked = () => {
  console.log('working');
  return (
    <div id="Experiencie" className="center-aboutMe">
      <h5 className="fs-2 text-light">Where I've Worked</h5>
      <div className="d-flex">
        <ScrollHorizontal />
        <div className="card bg-primary text-success" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Make It Real</h5>
            <h6 className="card-subtitle mb-2 text-muted">Agust 2021 - Feb 2022</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereIveWorked;

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const SocialMedia = () => {
  console.log('working');
  return (
  // justify-content-center
    <div className="text-success">
      <ul
        className="d-flex nose-3"
        style={{

        // position: 'fixed',
        // width: '20px',
        }}
      >
        <li className="align-items-end me-4 link">
          <FaLinkedinIn
            style={{ fontSize: '25px' }}
          />
        </li>
        <li className="align-items-end me-4 link">
          <GoMarkGithub style={{ fontSize: '25px' }} />
        </li>
        <li className="align-items-end me-4 link">
          <FaInstagram style={{ fontSize: '25px' }} />
        </li>
        {/* <li>
          <GoKebabVertical
            className="link"
            style={{
              height: '200px',
              backgroundColor: 'blue',
            }}
          />
        </li> */}
      </ul>
    </div>
  );
};

export default SocialMedia;

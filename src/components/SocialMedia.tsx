import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const SocialMedia = () => {
  console.log('working');
  return (
    <div className="text-success">
      <ul
        className="d-flex justify-content-center nose"
        style={{
          listStyle: 'none',
          // backgroundColor: 'yellow',
          // position: 'fixed',
        }}
      >
        <li className="align-items-end mt-4">
          <FaLinkedinIn
            style={{ fontSize: '25px' }}
          />
        </li>
        <li className="align-items-end mt-4">
          <GoMarkGithub style={{ fontSize: '25px' }} />
        </li>
        <li className="align-items-end mt-4">
          <FaInstagram style={{ fontSize: '25px' }} />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

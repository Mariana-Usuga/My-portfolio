import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const SocialMedia = () => {
  console.log('working');
  return (
    <div className="text-success mt-5">
      <ul className="d-flex  justify-content-evenly" style={{ listStyle: 'none' }}>
        <li>
          <FaLinkedinIn style={{ fontSize: '25px' }} />
        </li>
        <li>
          <GoMarkGithub style={{ fontSize: '25px' }} />
        </li>
        <li>
          <FaInstagram style={{ fontSize: '25px' }} />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

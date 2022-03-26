import { FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const SocialMedia = () => {
  console.log('working');
  return (
    <div className="text-success">
      <ul style={{ listStyle: 'none' }}>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <GoMarkGithub />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;

import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

const SocialMedia = () => (
  <div className="text-success">
    <ul
      className="d-flex nose-3"
    >
      <li className="align-items-end me-4 link">
        <a
          href="https://www.linkedin.com/in/mariana-usuga/"
          target="_blank"
          className="text-success"
          rel="noreferrer"
        >
          <FaLinkedinIn
            style={{ fontSize: '25px' }}
          />
        </a>
      </li>
      <li className="align-items-end me-4 link">
        <a
          href="https://github.com/Mariana-Usuga"
          target="_blank"
          className="text-success"
          rel="noreferrer"
        >
          <GoMarkGithub style={{ fontSize: '25px' }} />
        </a>
      </li>
      <li className="align-items-end me-4 link">
        <a
          href="https://www.instagram.com/mariana.usuga1/"
          target="_blank"
          className="text-success"
          rel="noreferrer"
        >
          <FaInstagram style={{ fontSize: '25px' }} />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialMedia;

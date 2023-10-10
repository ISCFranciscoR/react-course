import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Link from '../Link';
export default function Menu() {
  return (
    <nav className="top-menu">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

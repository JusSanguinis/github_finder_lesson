import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-xl bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="text-3xl pr-2 inline" />
          <Link to="/" className="text-xl font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="px-2 mx-2 flex-1">
          <div className="flex justify-end items-center">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;

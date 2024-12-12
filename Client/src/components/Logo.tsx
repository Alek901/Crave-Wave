import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Crave-Wave Logo"
        style={{
          height: '50px',
          position: 'absolute',
          top: '20px',
          left: '20px',
          cursor: 'pointer'
        }}
      />
    </Link>
  );
};

export default Logo;

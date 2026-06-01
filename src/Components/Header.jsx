import { ReactSVG } from "react-svg";

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <ReactSVG src="src/assets/logo-teal.svg" />
      </div>
      <div className="resto-info"></div>
    </header>
  );
};

export default Header;

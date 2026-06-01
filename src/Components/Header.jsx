import logo from "../assets/logo-teal.svg";
const Header = ({ data }) => {
  const { name, description, picture } = data.restaurant;
  return (
    <header>
      <div className="top-header">
        <div className="top-header-center">
          <img src={logo} />
        </div>
      </div>
      <div className="resto-info">
        <div className="resto-info-container">
          <div className="resto-info-text">
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
          <img src={picture} alt="image plat" className="resto-info-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;

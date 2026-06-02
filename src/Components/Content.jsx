import { IoStar } from "react-icons/io5";
import food from "../assets/food.jpg";

const Content = ({ data }) => {
  return (
    <div className="content-menu">
      {data.categories
        .filter((cat) => cat.meals.length > 0)
        .map((item, index) => {
          return (
            <div className="content-menu-items" key={index}>
              <h2>{item.name}</h2>
              <div className="content-menu-items-choice">
                {item.meals.map((meals) => {
                  return (
                    <div className="menu-item-card" key={meals.id}>
                      <div className="menu-item-card-txt">
                        <h3>{meals.title}</h3>
                        <p>{meals.description}</p>
                        <div className="menu-item-card-info">
                          <p>{meals.price}€</p>
                          {meals.popular && (
                            <div className="menu-item-card-info-bas">
                              <IoStar />
                              <p>Populaire</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="menu-item-card-img">
                        {meals.picture ? (
                          <img src={meals.picture} alt="plat" />
                        ) : (
                          <img src={food} alt="plat" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Content;

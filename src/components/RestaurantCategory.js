import { useState } from "react";
import ItemList from "./ItemList";
import DownArrowSvg from "./DownArrowSvg";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(true);

  const handleClick = () => setShowItems(!showItems);

  return (
    <div>
      <div
        className={`w-7/12 sm:w-8/12 lg:w-7/12 xl:w-6/12 mx-auto my-4 pt-5 ${
          data?.itemCards ? "pb-4" : "rounded-b-lg"
        } bg-gray-50 shadow-xl border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 ${
          data.itemCards && "hover:bg-gray-100"
        }`}
      >
        <div
          className={`px-4 flex items-center justify-between rtl:text-right ${
            data?.itemCards && "cursor-pointer"
          }`}
          onClick={data.itemCards && handleClick}
        >
          <span className="font-bold text-md">
            {data.title} {data?.itemCards && `(${data.itemCards.length})`}
          </span>
          {data?.itemCards && <DownArrowSvg />}
        </div>

        {data.categories ? (
          <div className="w-full pt-4">
            {data?.categories?.map((category, index) => (
              <div
                key={index}
                className="mb-2 p-4 shadow-lg border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
              >
                <Category category={category} />
              </div>
            ))}
          </div>
        ) : (
          showItems && (
            <div className="px-2">
              <ItemList items={data?.itemCards} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;

const Category = ({ category }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => setShowItems(!showItems);

  return (
    <div>
      <div
        className="flex items-center justify-between font-bold text-sm rtl:text-right cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {category.title} ({category.itemCards.length})
        </span>

        <DownArrowSvg />
      </div>

      {showItems && <ItemList items={category.itemCards} />}
    </div>
  );
};

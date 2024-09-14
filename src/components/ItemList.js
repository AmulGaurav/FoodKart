import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 flex justify-between flex-col-reverse items-center sm:flex-row sm:items-start"
        >
          <div className="w-9/12 sm:text-left">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-sm">{item.card.info.description}</p>
          </div>

          <div className="sm:pl-4 py-4">
            <div
              className={`flex justify-center items-center ${
                item.card.info.imageId ? "absolute" : "h-full"
              }`}
            >
              <button
                className={`${
                  item.card.info.imageId
                    ? "mx-14 sm:mx-9 mt-[155px] sm:mt-[140px]"
                    : "flex justify-center"
                } px-8 py-1.5 bg-white shadow-lg rounded-lg hover:bg-gray-200`}
              >
                Add
              </button>
            </div>

            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-52 sm:max-w-40 h-44 sm:h-40 rounded-lg"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

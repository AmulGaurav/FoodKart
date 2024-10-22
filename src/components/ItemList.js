import { useDispatch } from "react-redux";
import { MENU_ITEMS_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="px-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2 border-gray-200 border-b-2 flex justify-between flex-col-reverse items-center sm:flex-row sm:items-start"
        >
          <div className="w-9/12 sm:text-left">
            <div className="py-2">
              <span>{item.resName}</span>
              <span> - ₹499</span>
            </div>

            <p className="text-sm">
              Serves 1 | It's our signature. Spiced paneer, crunchy onions &
              green capsicum, spicy red paprika with delicious tandoori sauce
              and 100% mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326
              Kcal/100g | Stuffed Crust Add : Per: 227 Kcal/100g | Med: 216
              Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and
              Milk & Milk Products.
            </p>
          </div>

          <div className="sm:pl-4 py-4">
            <div className={"flex justify-center items-center absolute"}>
              <button
                className="mx-14 sm:mx-9 mt-[155px] sm:mt-[140px] px-8 py-1.5 bg-white shadow-lg rounded-lg hover:bg-gray-200"
                onClick={() =>
                  handleAddItem({ resName: item.resName, resImg: item.resImg })
                }
              >
                Add
              </button>
            </div>

            <img
              src={MENU_ITEMS_IMG_URL + item.resImg + ".jpg"}
              className="w-52 sm:max-w-40 h-44 sm:h-40 rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

import { AiFillHeart } from "react-icons/ai";
import { IoHeartDislike } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../store/user-slice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";

const DestinationCard = ({ id, title, detail, bg }) => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.user?.destinations);
  const found = destinations.find((destination) => destination.id === id);

  const addToWishlistHandler = () => {
    if (!isAuthenticated) {
      toast.info("Please login to add to wishlist.");
      return;
    }
    dispatch(userActions.addDestination({ id, title, detail, bg }));
    toast.success(`${detail} has added to the wishlist.`);
  };
  const removeFromWishlistHandler = () => {
    if (!isAuthenticated) {
      toast.info("Please login to remove from wishlist.");
      return;
    }
    dispatch(userActions.removeDestination({ id }));
    toast.success(`${detail} has removed from the wishlist.`);
  };

  return (
    <div className="relative overflow-hidden bg-cyan-300 max-h-96 rounded-xl hover:shadow-xl">
      <div className="absolute p-4 z-[1] h-full w-full justify-between flex flex-col">
        <span className="flex items-center self-end justify-center w-12 h-12 p-2 border  backdrop-blur-sm bg-gray-800/30 rounded-xl border-gray-400/50 hover:shadow-xl">
          {found && (
            <IoHeartDislike
              onClick={removeFromWishlistHandler}
              className="text-white cursor-pointer  hover:text-black/40"
              size={30}
            />
          )}
          {!found && (
            <AiFillHeart
              onClick={addToWishlistHandler}
              size={30}
              className="text-white cursor-pointer hover:text-black/40"
            />
          )}
        </span>
        <div className="self-end w-full p-2 border md:p-4 rounded-xl hover:shadow-xl backdrop-blur-sm bg-gray-800/30 border-gray-400/50">
          <h1 className="mb-1 text-2xl font-bold text-white md:text-3xl">
            {title}
          </h1>
          <div className="flex justify-between">
            <h3 className="text-base font-bold text-left text-white capitalize md:text-lg">
              {detail}
            </h3>
            <h3 className="text-base font-bold text-right text-white capitalize md:text-lg">
              {Math.floor(Math.random() * 100)} Tours
            </h3>
          </div>
        </div>
      </div>
      <img className="w-full" src={bg} alt={title} />
    </div>
  );
};

export default DestinationCard;

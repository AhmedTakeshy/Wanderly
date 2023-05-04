import { AiFillHeart } from "react-icons/ai";
import { IoHeartDislike } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/user-slice";
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
    <div className="bg-cyan-300 max-h-96 rounded-xl hover:shadow-xl overflow-hidden relative">
      <div className="absolute p-4 z-[1] h-full w-full justify-between flex flex-col">
        <span className=" p-2 backdrop-blur-sm bg-gray-800/30 w-12 h-12 justify-center items-center flex self-end rounded-xl border-gray-400/50 border hover:shadow-xl">
          {found && (
            <IoHeartDislike
              onClick={removeFromWishlistHandler}
              className=" cursor-pointer text-white hover:text-black/40"
              size={30}
            />
          )}
          {!found && (
            <AiFillHeart
              onClick={addToWishlistHandler}
              size={30}
              className="cursor-pointer text-white hover:text-black/40"
            />
          )}
        </span>
        <div className="md:p-4 p-2 rounded-xl w-full hover:shadow-xl backdrop-blur-sm bg-gray-800/30 self-end border-gray-400/50 border">
          <h1 className="text-white font-bold md:text-3xl text-2xl mb-1">
            {title}
          </h1>
          <div className="flex justify-between">
            <h3 className="text-white font-bold md:text-lg text-base text-left capitalize">
              {detail}
            </h3>
            <h3 className="text-white font-bold md:text-lg text-base  text-right capitalize">
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

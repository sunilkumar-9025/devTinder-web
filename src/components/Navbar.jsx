import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../utils";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { addUser } from "../store/userSlice";
import { getUrl } from "../utils/constants";

const Navbar = () => {
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async() => {
      try {
      const res = await axios.post(getUrl("logout"), {}, { withCredentials: true });
      if (res.status === 200) {
        dispatch(addUser(res.data.data));
        navigate("/logout")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navbar bg-transparent px-4 shadow-md">
      <div className="flex-1">
        <Link to="/feed" className="text-[22px] text-purple-700 italic font-bold">
          DevTinder
        </Link>
      </div>
      {!isEmpty(user) && (
        <div className="flex items-center gap-3">
          <p className="hidden sm:block font-medium">Welcome {user.firstName}</p>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-2 ring-purple-500/60 ring-offset-2 ring-offset-transparent">
              <div className="w-10 rounded-full">
                <img alt="User Icon" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu dropdown-content bg-base-100 text-base-content rounded-box z-50 mt-3 w-56 gap-1 p-2 shadow-xl border border-base-300"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/setting">Settings</Link>
              </li>
              <div className="divider my-0"></div>
              <li>
                <button type="button" onClick={handleLogout} className="text-error hover:bg-error/10">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

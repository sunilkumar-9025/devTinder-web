import { Outlet, useNavigate } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { useEffect } from "react";
import { isEmpty } from "../utils";
import { getUrl } from "../utils/constants";

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.User);

  const fetchUser = async () => {
    try {
      const res = await axios.get(getUrl("profile/view"), { withCredentials: true });
      if (res.status === 200) {
        dispatch(addUser(res.data.data));
      }
    } catch (error) {
      navigate("/");
      console.error(error);
    }
  };

  useEffect(() => {
    if (isEmpty(user)) {
      fetchUser();
    }
  }, []);

  return (
    <div className="bg-[url(https://i0.wp.com/picjumbo.com/wp-content/uploads/green-natural-background-with-wooden-surface-free-image.jpeg?w=1500&quality=50)] bg-no-repeat bg-cover min-h-dvh flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

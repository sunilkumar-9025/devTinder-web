import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <div className="card w-full max-w-96 bg-base-300 card-xl shadow-sm">
        <div className="card-body">
          <div className="flex flex-col items-center gap-4 text-center">
            <img
              className="w-20 h-20"
              src="https://cdn.prod.website-files.com/675a6f433107ecdc86e9db88/675a8256bf70ecef606e52be_logout-svgrepo-com.svg"
              alt="Logout"
            />
            <p className="text-3xl font-bold">Logout Successful</p>
            <p className="text-center text-xl">
              You have been successfully logged out. Thank you for visiting! We hope to see you soon — simply log back in.
            </p>
          </div>

          <div className="mt-6">
            <button className="btn btn-secondary btn-block rounded-xs" onClick={() => navigate("/")}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path>
              </svg>
              Log In Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;

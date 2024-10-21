/** @format */

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { checkIfUserExists, createNewUser } from "../redux/tomSlice";
import { useEffect, useState } from "react";
import { getParamsFromUrl } from "../utils/urlParams";
import toast from "react-hot-toast";
import LoadingScreen from "../utils/LoadingScreen";
import { isMobile } from "react-device-detect";
import { useMicrophone } from "../contexts/MicrophoneContext";
const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setStream } = useMicrophone();
  // Extract userID and userName from URL parameters
  const { userID, userName } = getParamsFromUrl();
  const requestMicAccess = async () => {
    try {
      // Check if microphone permission is already granted
      const permissionGranted = localStorage.getItem(
        "microphonePermissionGranted",
      );

      if (!permissionGranted) {
        // Request permission if not granted
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        localStorage.setItem("microphonePermissionGranted", "true");
        console.log("Microphone access granted");
        return stream;
      } else {
        // Use existing permission
        console.log("Microphone access already granted");
        return await navigator.mediaDevices.getUserMedia({ audio: true });
      }
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Unable to access microphone. Please check your permissions.");
      throw err;
    }
  };

  const handleCreate = async () => {
    setLoading(true);

    try {
      if (!userID || !userName) {
        toast.error("UserName is missing!");
        return;
      }

      // Check if user exists
      const result = await dispatch(checkIfUserExists(userID)).unwrap();

      if (!result) {
        // If user does not exist, create a new user
        const newUser = await dispatch(
          createNewUser({ userID, userName }),
        ).unwrap();

        // Manually update Redux state if needed
        dispatch(updateUserState(newUser)); // An example action to set user data in Redux

        toast.success("User Login successfully!");

        // Handle microphone access
        // const stream = await requestMicAccess();
        // setStream(stream);
        localStorage.removeItem("modalOpened");
        // Navigate to the game page
        navigate("/play");
      } else {
        // If user already exists, navigate to the game page
        // const stream = await requestMicAccess();
        // setStream(stream);
        localStorage.removeItem("modalOpened");
        navigate("/play");
      }
    } catch (err) {
      // Handle errors
      console.error("Error handling user creation or microphone access:", err);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   handleCreate();
  // }, [dispatch, userID, userName, navigate]);
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      {isMobile ? (
        <div
          className="  w-full sm:max-w-xs   m-auto h-screen   relative  shadow-2xl overflow-hidden filter backdrop-brightness-50 bg-[#161E34] bg-contain  bg-[url(/start.png)] bg-no-repeat  bg-top "
          // style={{ backgroundSize: "100% 100%" }}
        >
          {/* <span className="title  text-center text-lg flex justify-center w-full absolute top-48   left-1/2   transform -translate-x-1/2 -translate-y-1/2">
            Beta version
          </span> */}
          <div className=" absolute top-[18%]   flex justify-center flex-col items-center  w-full text-center m-auto  ">
            <h4 className="text-center txt  font-bold text-2xl text-white    [text-shadow:1px_1px_2px_var(--tw-shadow-color)]   shadow-black ">
              Talk to earn game on
            </h4>
            <h1 className="text-center txt font-bold text-5xl text-white    [text-shadow:1px_1px_2px_var(--tw-shadow-color)]  shadow-black ">
              Core Blockchain
            </h1>
            <div className="text-center mt-2 flex items-center gap-5">
              <img src="/talktom.png" className="w-14 rounded-full " alt="" />
              <span className="text-center txt font-bold text-5xl text-white    [text-shadow:1px_1px_2px_var(--tw-shadow-color)]  shadow-black">
                x
              </span>
              <img src="/bitget.jpg" className="w-14 rounded-full " alt="" />
            </div>
          </div>
          <div className=" absolute bottom-20   left-1/2   transform -translate-x-1/2 -translate-y-1/2  m-auto ">
            <button
              onClick={() => handleCreate()}
              className="mybtn block uppercase animate-bounce"
            >
              Start
            </button>
          </div>
          <div className="media absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full m-auto flex justify-center flex-col items-center  ">
            <div>
              <span className="title txt">More Info in official Channels</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center  items-center ">
              <a href="https://x.com/Tomtalkofficial" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-twitter-x icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a href="https://t.me/tomtalkofficial" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-telegram icon "
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Tomtalkofficial"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-youtube icon "
                  viewBox="0 0 16 16"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full sm:max-w-xs   m-auto h-screen rounded-lg  relative bg-black  shadow-2xl overflow-hidden flex justify-center text-center items-center ">
          <div>
            <h3 className="text-white text-3xl text-center  font-semibold">
              Play on your mobile
            </h3>
            <img
              src="/bot.png"
              className=" w-3/4 m-auto my-5 rounded-xl border-2 border-white p-2"
              alt=""
            />
            <h3 className="text-white text-3xl text-center  ">@TOMTALK_BOT</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Start;

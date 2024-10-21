/** @format */

const LoadingScreen = () => {
  return (
    <div className="  w-full sm:max-w-xs  m-auto h-screen rounded-lg flex justify-center items-center relative  shadow-2xl overflow-hidden  bg-no-repeat bg-cover bg-center ">
      <div className="absolute top-1/2   left-1/2   transform -translate-x-1/2 -translate-y-1/2  m-auto">
        {/* <div className="loader">
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
          <div className="bar4" />
          <div className="bar5" />
          <div className="bar6" />
          <div className="bar7" />
          <div className="bar8" />
          <div className="bar9" />
          <div className="bar10" />
          <div className="bar11" />
          <div className="bar12" />
        </div> */}
        <img
          src="/talktom.png"
          className="rounded-full w-16 sh m-auto mb-4"
          alt=""
        />

        <div className="loader1">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

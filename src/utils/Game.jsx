/** @format */

// /** @format */
// import { useEffect, useRef, useState } from "react";
// import Spritesheet from "react-responsive-spritesheet";
// import { increment } from "../redux/counterSlice";
// import { useDispatch, useSelector } from "react-redux";

// export default function Game() {
//   const spriteRef = useRef(null);

//   const [isAnimating, setIsAnimating] = useState(false);
//   const [volumeThreshold, setVolumeThreshold] = useState(30); // Adjust as needed
//   const dispatch = useDispatch();

//   const count = useSelector((state) => state.counter.value); // Get count from redux
//   // console.log(isAnimating);

//   const handleVoiceInput = async () => {
//     try {
//       // Request microphone permissions
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       console.log("Microphone access granted.");
//       const audioContext = new (window.AudioContext ||
//         window.webkitAudioContext)();
//       const microphone = audioContext.createMediaStreamSource(stream);
//       const analyser = audioContext.createAnalyser();
//       microphone.connect(analyser);
//       analyser.fftSize = 512;
//       const bufferLength = analyser.frequencyBinCount;
//       const dataArray = new Uint8Array(bufferLength);

//       const checkVolume = () => {
//         analyser.getByteFrequencyData(dataArray);
//         const volume = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
//         // console.log(volume);

//         if (volume > volumeThreshold) {
//           if (!isAnimating) {
//             setIsAnimating(true);
//             if (spriteRef.current) {
//               spriteRef.current.goToAndPlay(1); // Start animation
//             }

//             dispatch(increment());
//             setTimeout(() => {
//               setIsAnimating(false);
//               if (spriteRef.current) {
//                 spriteRef.current.pause(); // Pause animation
//               }
//               // setScore((prevScore) => prevScore + 0.01); // Update score
//             }, 5000); // Duration of animation
//           }
//         }

//         requestAnimationFrame(checkVolume);
//       };

//       checkVolume();
//     } catch (err) {
//       console.error("Error accessing microphone:", err);
//       // alert("Unable to access microphone. Please check your permissions.");
//     }
//   };

//   useEffect(() => {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       handleVoiceInput();
//     } else {
//       alert("Unable to access microphone. Please check your permissions.");
//     }
//   }, [dispatch, volumeThreshold]);

//   return (
//     <div
//       className={`flex  mt-5 justify-center  w-full  h-96 sm:h-72  rounded-full items-center bg-[url(/speaker.png)] bg-no-repeat  bg-contain bg-center  ${isAnimating && "background-animate"}`}
//     >
//       <div
//         className={`flex  absolute top-1/2 left-1/2 transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
//       >
//         <h3 className="text-white text-2xl coin font-bold">
//           +{count.toFixed(1)}
//         </h3>
//       </div>
//       <div
//         className={`flex  absolute top-1/2 left-[40%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
//       >
//         <h3 className="text-white text-2xl coin1 font-bold">
//           +{(count - 0.08).toFixed(1)}
//         </h3>
//       </div>

//       <div
//         className={`flex  absolute top-1/2 left-[60%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
//       >
//         <h3 className="text-white text-2xl coin2 font-bold">
//           +{(count - 0.5).toFixed(1)}
//         </h3>
//       </div>

//       <div
//         className={`flex  absolute top-1/2 left-1/2 transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
//       >
//         <h3 className="text-white text-2xl coin3 font-bold">
//           +{count.toFixed(1)}
//         </h3>
//       </div>
//       <div
//         className={`flex  absolute top-1/2 left-[40%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
//       >
//         <h3 className="text-white text-2xl coin4 font-bold">
//           +{count.toFixed(1)}
//         </h3>
//       </div>

//       <div
//         className={`flex  absolute top-1/2 left-[60%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
//       >
//         <h3 className="text-white text-2xl coin5 font-bold">
//           +{count.toFixed(1)}
//         </h3>
//       </div>
//       {isAnimating ? (
//         <>
//           <div className="section ">
//             <div className="leaf">
//               <div>
//                 {" "}
//                 <img src="/music.png" height="50px" width="50px" />
//               </div>
//               <div>
//                 <img src="/music.png" height="50px" width="50px" />
//               </div>
//               <div>
//                 {" "}
//                 <img src="/music.png" height="50px" width="50px" />
//               </div>
//               <div>
//                 <img src="/music.png" height="50px" width="50px" />
//               </div>
//               <div>
//                 {" "}
//                 <img src="/music.png" height="50px" width="50px" />
//               </div>
//             </div>
//           </div>
//           <img src="cat2.png" className="sm:w-36 w-48  z-10   re  " alt="" />
//         </>
//       ) : (
//         <>
//           <img src="cat1.png" className="sm:w-36 w-48   animate-none " alt="" />
//         </>
//       )}
//       <img
//         src="cat1.png"
//         className="sm:w-36 w-48 absolute   animate-none "
//         alt=""
//       />
//     </div>
//   );
// }
/** @format */
import { useEffect, useRef, useState } from "react";
import { increment } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMicrophone } from "../contexts/MicrophoneContext";

export default function Game() {
  const spriteRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [volumeThreshold, setVolumeThreshold] = useState(30); // Adjust as needed
  const dispatch = useDispatch();
  const { lvl } = useSelector((state) => state.tom.user); // Get count from redux
  const { stream } = useMicrophone();
  const handleVoiceInput = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    if (stream) {
      try {
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const microphone = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        microphone.connect(analyser);
        analyser.fftSize = 512;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const checkVolume = () => {
          analyser.getByteFrequencyData(dataArray);
          const volume = dataArray.reduce((a, b) => a + b, 0) / bufferLength;

          if (volume > volumeThreshold && !isAnimating) {
            setIsAnimating(true);
            if (spriteRef.current) {
              spriteRef.current.goToAndPlay(1); // Start animation
            }
            dispatch(increment());

            setTimeout(() => {
              setIsAnimating(false);
              if (spriteRef.current) {
                spriteRef.current.pause(); // Pause animation
              }
            }, 5000); // Duration of animation
          }

          requestAnimationFrame(checkVolume);
        };

        checkVolume();
      } catch (err) {
        console.error("Error accessing microphone:", err);
      }
    }
  };

  useEffect(() => {
    const checkMicrophoneAccess = async () => {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          handleVoiceInput();
        } catch (error) {
          console.error("Microphone access denied:", error);
        }
      } else {
        console.warn("Media devices API not supported.");
      }
    };

    checkMicrophoneAccess();

    return () => {
      // Cleanup logic if needed, e.g., stopping streams or clearing intervals
    };
  }, [dispatch, volumeThreshold]);
  return (
    <div
      className={`flex justify-center items-center m-auto rounded-full object-contain bg-[url('/speaker.png')] bg-no-repeat bg-center bg-cover w-full max-w-[350px]  aspect-[1/1] sm:max-w-full sm:h-auto ${isAnimating && "background-animate"}`}
    >
      <div
        className={`flex  absolute top-1/2 left-1/2 transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
      >
        <h3 className="text-white text-2xl coin font-bold">+{lvl}</h3>
      </div>
      <div
        className={`flex  absolute top-1/2 left-[40%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
      >
        <h3 className="text-white text-2xl coin1 font-bold">+{lvl}</h3>
      </div>

      <div
        className={`flex  absolute top-1/2 left-[60%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}
      >
        <h3 className="text-white text-2xl coin2 font-bold">+{lvl}</h3>
      </div>

      {/* <div
        className={`flex  absolute top-1/2 left-1/2 transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}>
        <h3 className='text-white text-2xl coin3 font-bold'>+1</h3>
      </div>
      <div
        className={`flex  absolute top-1/2 left-[40%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}>
        <h3 className='text-white text-2xl coin4 font-bold'>+1</h3>
      </div>

      <div
        className={`flex  absolute top-1/2 left-[60%] transform gap-3 -translate-x-1/2 -translate-y-1/2   justify-center  ${isAnimating ? "block" : "hidden"}`}>
        <h3 className='text-white text-2xl coin5 font-bold'>+1</h3>
      </div> */}

      {isAnimating ? (
        <>
          <div className="section ">
            <div className="leaf">
              <div>
                {" "}
                <img
                  src="/music.png"
                  height="50px"
                  width="50px"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src="/music.png"
                  height="50px"
                  width="50px"
                  loading="lazy"
                />
              </div>
              <div>
                {" "}
                <img
                  src="/music.png"
                  height="50px"
                  width="50px"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src="/music.png"
                  height="50px"
                  width="50px"
                  loading="lazy"
                />
              </div>
              <div>
                {" "}
                <img
                  src="/music.png"
                  height="50px"
                  width="50px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <img
            src="/tapcat8.png"
            className="sm:w-36 w-44  z-10     "
            loading="lazy"
            alt=""
          />
        </>
      ) : (
        <>
          <img
            src="/tapcat9.png"
            className="sm:w-36 w-44   animate-none "
            loading="lazy"
            alt=""
          />
        </>
      )}
      <img
        src="/tapcat9.png"
        className="sm:w-36 w-44 absolute   animate-none "
        loading="lazy"
        alt=""
      />
    </div>
  );
}

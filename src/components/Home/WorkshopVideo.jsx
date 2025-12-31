import { useRef, useState } from "react";
import thumbnail from "../../assets/img/thumb1.jpg";
import video1 from "../../assets/video/vid1.mp4";


export default function WorkshopVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  const handleVolume = (e) => {
    videoRef.current.volume = e.target.value;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg border-2 border-[#f5c8f6]">

      {!playing && (
        <>
          <img
            src={thumbnail}
            className="w-full rounded-3xl cursor-pointer"
            alt="Workshop Thumbnail"
          />

          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </>
      )}

      <video
        ref={videoRef}
        className={`w-full rounded-3xl ${!playing && "hidden"}`}
        controls
      >
        <source src={video1} type="video/mp4" />
      </video>

      {playing && (
        <div className="absolute bottom-4 left-4 bg-white/80 px-3 py-1 rounded-full shadow-md flex items-center gap-2">
        </div>
      )}
    </div>
  );
}

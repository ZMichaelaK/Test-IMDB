import fwwm from "./fwwm.png";
import "./Banner.css";
function Banner() {
  return (
    <>
      <img src={fwwm} alt="fire walk with me"/>
      <div className="banner-head">
      <div className="bg-gray-900
            bg-opacity-40
            text-white
            text-2xl
            font-bold
            py-10
            text-center">
          FIRE WALK WITH ME
        </div>
      </div>
    </>
  );
}

export default Banner;

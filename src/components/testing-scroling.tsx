import "@/style/testing.css";
import Image from "next/image";
import Apiimg from "@/assets/Api.svg";

const AnimatedCircle = () => {
  return (
    <div className="container">
      <Image
        className="img-1 animate"
        src={Apiimg}
        alt="Img-1"
        width={64}
        height={64}
      />
      <Image
        className="img-2 animate-2"
        src={Apiimg}
        alt="Img-2"
        width={64}
        height={64}
      />
      <Image
        className="img-3 animate-3"
        src={Apiimg}
        alt="Img-3"
        width={64}
        height={64}
      />
      <Image
        className="img-4 animate-4"
        src={Apiimg}
        alt="Img-4"
        width={64}
        height={64}
      />
      <Image
        className="img-5 animate-5"
        src={Apiimg}
        alt="Img-5"
        width={64}
        height={64}
      />
      <Image
        className="img-6 animate-6"
        src={Apiimg}
        alt="Img-6"
        width={64}
        height={64}
      />
      <Image
        className="img-7 animate-7"
        src={Apiimg}
        alt="Img-7"
        width={64}
        height={64}
      />
      <Image
        className="img-8 animate-8"
        src={Apiimg}
        alt="Img-8"
        width={64}
        height={64}
      />
    </div>
  );
};

export default AnimatedCircle;

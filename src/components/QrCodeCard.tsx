import QrCodeImage from "../assets/image-qr-code.png";

interface Props {}

const QrCodeCard: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="rounded-[20px] p-4 bg-white w-[320px]">
      <div className="rounded-[10px] w-[288px] h-[288px]">
        <img src={QrCodeImage} alt="QrCodeImage" className="h-full w-full" />
      </div>
      <div className="mt-6">
        <div className="text-[22px] font-bold text-center leading-7 text-[#1F314F]">
          Improve your front-end skills by building projects
        </div>
        <div className="p-4 text-[#7D889E] text-[15px] leading-5 text-center font-normal">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
};

export default QrCodeCard;

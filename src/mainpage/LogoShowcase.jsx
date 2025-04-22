import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      {/* <img src={icon.imgPath} alt={icon.name} /> */}
      <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-green-500 to-yellow-500 bg-clip-text text-transparent">$MAXIMUS</h1>
    </div>
  );
};

const LogoShowcase = () => (
  <div>
    {/* <div className="gradient-edge" />
    <div className="gradient-edge" /> */}

    <div className="marquee">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;

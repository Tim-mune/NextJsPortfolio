const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="p-4 flex flex-wrap items-center justify-around bg-slate-950 font-mont tracking-widest capitalize text-cyan-300 gap-4 ">
      <div className="absolute pink__gradient rounded-full left-0 bottom-0 " />
      <div>
        <h5 className="">Timmy Nesh</h5>
      </div>
      <div>
        <p>
          copyright <span>{year}</span>
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-2 justify-center items-center">
          <li className="text-lg text-">+254 112797131</li>
          <li>+254 114335771</li>
          <a href="">neshtimo38@gmail.com</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

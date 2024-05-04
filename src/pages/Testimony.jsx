import t1 from "../assets/images/t1.jpg";

const Testimony = () => {
  return (
    <div className="h-full overflow-hidden px-[14rem] max-xl:px-[8rem] max-lg:px-[4rem] max-md:px-[2rem] pb-[4rem]">
      <h1 className="text-center my-20 text-[1.8rem] max-lg:my-10">
        Testimony
      </h1>

      <div className="grid grid-cols-2 place-items-center gap-10 max-lg:grid-cols-1 max-md:gap-5">
        <div className="flex items-start gap-8 p-4 rounded-lg shadow-md bg-white max-md:gap-4">
          <img
            src={t1}
            className="w-16 h-16 rounded-full border-t-4 border-l-8 border-b-4 border-blue-900"
            alt=""
          />
          <div>
            <h2 className="font-medium">Abdoulaye Bademba Sow</h2>
            <span className="text-gray-500">Web Developper</span>
            <p className="leading-5 mt-4 font-[400] text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              officia expedita ratione quaerat cupiditate, sequi blanditiis
              veritatis porro suscipit fuga?
            </p>
          </div>
        </div>
        <div className="flex items-start gap-8 p-4 rounded-lg shadow-md bg-white max-md:gap-4">
          <img
            src={t1}
            className="w-16 h-16 rounded-full border-t-4 border-l-8 border-b-4 border-blue-900"
            alt=""
          />
          <div>
            <h2 className="font-medium">Abdoulaye Bademba Sow</h2>
            <span className="text-gray-500">Web Developper</span>
            <p className="leading-5 mt-4 font-[400] text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              officia expedita ratione quaerat cupiditate, sequi blanditiis
              veritatis porro suscipit fuga?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;

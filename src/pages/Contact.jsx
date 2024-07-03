// import { useRef } from "react";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   console.log(form.current["user_name"]);
  // };

  return (
    <div
      name="contact"
      className="h-screen overflow-hidden px-[14rem] max-xl:px-[8rem] max-xl:h-auto max-lg:px-[4rem] max-md:px-[2rem] pb-[4rem] my-anima"
    >
      <h1 className="text-center my-20 text-[1.8rem] max-lg:my-10">
        Contact Me
      </h1>

      <div className="grid grid-cols-2 rounded-lg bg-white max-lg:grid-cols-1 my-anima">
        <div className="flex items-center justify-center p-4 max-lg:hidden">
          <div className="img-contact"></div>
        </div>
        <div className="px-8 py-4 max-sm:px-4 max-sm:py-2">
          <h3 className="my-5 text-lg max-sm:text-sm">
            Contactez-moi en quelque clique.
          </h3>

          <form
            // ref={form} onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="user_name"
              className="border-2 rounded-lg py-1.5 px-2"
              placeholder="Full Name *"
            />
            <input
              type="text"
              name="user_email"
              className="border-2 rounded-lg py-1.5 px-2"
              placeholder="Email address *"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              className="border-2 rounded-lg py-1.5 px-2"
              placeholder="Message *"
            ></textarea>
            <div className="flex items-center justify-end">
              <button className="text-right border-2 px-4 rounded-lg py-1.5">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

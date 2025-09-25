import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   console.log(form.current["user_name"]);
  // };

  return (
    <div
      name="contact"
      className="h-auto overflow-hidden px-[14rem] max-xl:px-[8rem] max-xl:h-auto max-lg:px-[4rem] max-md:px-[2rem] pb-[4rem] my-anima"
    >
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center my-10 text-[2rem] font-[500] max-lg:my-10"
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-2 rounded-lg bg-white max-lg:grid-cols-1 my-anima hover:shadow-medium hover:shadow-slate-200">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center p-4 max-lg:hidden"
        >
          <div className="img-contact"></div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className="px-8 py-4 max-sm:px-4 max-sm:py-2"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: { name: "", email: "", message: "" } });

  const chatBoxToggleHandler = () => {
    setOpen((prev) => !prev);
    reset();
  };

  const submitHandler = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      if (res.status === 200) {
        toast.success("Thanks!, We'll reach you soon.");
        reset();
      }
    } catch (error) {
      toast.error("Something wrong occurred please try again!");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center fixed left-4 bottom-4 z-50">
      <ToastContainer />
      <div className="w-full">
        {open && (
          <div className="formbold-form-wrapper mx-auto w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white">
            <div className="flex items-center justify-between rounded-t-lg bg-custom_purple py-4 px-5">
              <h3 className="text-xl font-bold text-white mr-8">
                Let's chat? - Online
              </h3>
              <button onClick={chatBoxToggleHandler} className="text-white">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  className="fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                  />
                </svg>
              </button>
            </div>
            <form
              ref={form}
              onSubmit={handleSubmit(submitHandler)}
              className="py-6 px-9"
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Your Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-custom_purple focus:shadow-md"
                />
                {errors.name && (
                  <p className="text-rose-500 mt-2 text-sm">
                    ⚠ This field is required
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-custom_purple focus:shadow-md"
                />
                {errors.email && (
                  <p className="text-rose-500 mt-2 text-sm">
                    ⚠ This field is required
                  </p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Explain your queries"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-custom_purple focus:shadow-md"
                ></textarea>
                {errors.message && (
                  <p className="text-rose-500 mt-2 text-sm">
                    ⚠ This field is required
                  </p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-form w-full rounded-md bg-custom_purple py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  {isSubmitting ? "Sending..." : "Start Chat"}
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="mx-auto md:mt-8 mt-4 flex max-w-[550px] items-center justify-start space-x-5">
          <button
            className="flex md:h-[70px] h-[50px] md:w-[70px] w-[50px] items-center justify-center rounded-full bg-custom_purple text-white"
            onClick={chatBoxToggleHandler}
          >
            {open && (
              <span className="cross-icon">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
            {!open && (
              <span>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
                    fill="white"
                  />
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

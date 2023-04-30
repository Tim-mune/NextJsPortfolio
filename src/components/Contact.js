import Button from "./Button";
const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen p-4 flex flex-col items-center justify-around "
    >
      <h4 className="text-center font-mont tracking-widest">contact</h4>
      <form
        action=""
        className="flex flex-col justify-around gap-10 border border-teal-600 p-10 rounded-lg xl:w-[50%] lg:w-[60%]  md:w-[70%] sm:w-[70%]  ss:w-[80%]  xs:w-[100%]  items-center"
      >
        <h5 className="font-Dancing text-xl tracking-widest text-center">
          Reach me
        </h5>
        <label
          htmlFor="email"
          className="font-mont tracking-widest underline-offset-2"
        >
          Email Address
        </label>
        <input
          placeholder="facebook.com"
          type="text"
          id="email"
          name="email"
          value=""
          onChange={() => console.log("submit form")}
          className="bg-transparent hover:border-teal-400 hover:border-2 p-2 rounded-md font-Dancing text-xl"
        />
        <Button />
      </form>
    </div>
  );
};

export default Contact;

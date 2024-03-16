const Contact = () => {
  return (
    <>
      <div className="text-center m-auto w-[20%]">
        <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
        <form className="flex flex-col align-center justify-center">
          <input
            type="text"
            className="border border-black p-2 m-2 rounded-lg"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2 rounded-lg"
            placeholder="Massage"
          />
          <button className="border border-black bg-black text-white p-2 m-2 rounded-lg font-medium">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;

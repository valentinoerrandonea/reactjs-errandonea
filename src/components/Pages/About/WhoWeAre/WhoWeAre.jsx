export const WhoWeAre = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img
          className="mx-auto h-12"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Dunder_Mifflin%2C_Inc.svg"
          alt=""
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              Welcome to our company, where we proudly embrace the spirit of
              Dunder Mifflin and The Office!<br></br> Just like the iconic
              characters of the show, we strive to create an environment that is
              both hilarious and productive. Our team knows how to work hard
              while also finding moments of humor and camaraderie. At our
              company, we are inspired by the quirky and unforgettable
              personalities of The Office.
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
};

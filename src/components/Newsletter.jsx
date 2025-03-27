import { CalendarDaysIcon, Hand } from "lucide-react";
import React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

 const recaptchaRef = React.createRef();


   


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setEmail("")

    const recaptchaValue = recaptchaRef.current.getValue();

    if(!recaptchaValue) {
      setErrorMessage("Please verify the Captcha.")
      
    } else { 

    try {
      const response = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_MAILER_LITE}`,
          },
          body: JSON.stringify({
            email: email,
            groups: ["149853449897379819"],
          }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.errors) {
        setErrorMessage(data?.message);
        return;
      }

      setSuccessMessage("Thank you for joining our newsletter!");
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to subscribe. Please try again later.");
    }
    
  }
 
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-48 bg-white isolate overflow-hidden">
      <div className="px-6 mx-auto lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-2xl mx-auto lg:max-w-none lg:mx-0 gap-y-16">
          <div className="max-w-xl lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Subscribe for newsletter.
            </h1>
            <p className="mt-4 text-lg leading-8 text-black">
              Hoopnomics latest news letter with basketball trends and updates.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex max-w-md mt-6 gap-x-4"
            >
              <input
                type={email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="min-w-0 max-w-md rounded-md border-0 bg-slate-200 px-3.5 py-2.5 
    text-black ring-1 ring-inset w-full ring-black/10 focus:ring-2 
    focus:ring-inset focus-within:ring-blue-500 sm:text-sm sm:leading-6"
              ></input>
              <button
                className="flex-none rounded-md bg-blue-600 py-2.5 px-3.5 font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline 
    oucs-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Subscribe
              </button>
            </form>
            <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.REACT_APP_GOOGLE_RECAPTHA} />
            {errorMessage && <p className="p-2 text-red-600">{errorMessage}</p>}
            {successMessage && (
              <p className="p-2 text-green-600">{successMessage}</p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
            <div className="flex flex-col group items-start">
              <div
                className="p-2 rounded-md group-hover:ring-[2px]
    group-hover:ring-white/20 bg-white/5 transition-all duration-200 ring-2 ring-white/10"
              >
                <CalendarDaysIcon className="w-6 h-6 text-black" />
              </div>
              <h3 className="mt-4 leading-7 text-black">Weekly articles</h3>
              <p className="mt-2 leading-7 text-black">
                Subscirbe to our newsletter to get basketball tips, insight and
                the latest news about the global basketball market.
              </p>
            </div>
            <div className="flex flex-col group items-start">
              <div
                className="p-2 rounded-md group-hover:ring-[2px]
    group-hover:ring-white/20 bg-white/5 transition-all duration-200 ring-2 ring-white/10"
              >
                <Hand className="w-6 h-6 text-black" />
              </div>
              <h3 className="mt-4 leading-7 text-black">No spam</h3>
              <p className="mt-2 leading-7 text-black">
                Only relevant information
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

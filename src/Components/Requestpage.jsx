import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import ContactFormImg from "../assets/Complete-Form.svg";

const Requestpage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [result, setResult] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    // Get form data and convert it to a JSON object
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/request-sample`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          navigate("/");
        }, 1000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Failed to send query");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Ensure your backend server is running!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResultColor = () => {
    if (result === "Form Submitted Successfully") return "text-green-600";
    if (result === "Sending....") return "text-gray-600";
    return "text-red-500";
  };

  return (
    <section className="ml-mr mt-5 md:mt-20 mb-16 md:mb-20">
      <div className="grid overflow-hidden rounded-[30px] md:rounded-[40px] grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side (Dark background, text white) */}
        <div className="flex flex-col items-center justify-center p-8 text-center text-white sm:p-10 lg:p-12">
          <h1 className="mt-0 max-w-xl text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight uppercase tracking-wider">
            Request A Sample
          </h1>
          <p className="mt-4 max-w-lg text-sm text-gray-200 sm:text-base leading-relaxed">
            Experience our quality firsthand. Share your details below and our technical team will arrange a tailored sample for your evaluation.
          </p>
          <img
            src={ContactFormImg}
            alt="Request Form"
            className="mt-8 w-full max-w-md"
          />
        </div>

        {/* Right Side (White Card) */}
        <div className="p-4 text-black sm:p-10 lg:p-12">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold sm:text-2xl">Send us your request</h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Please fill in the details below.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
              
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Contact Number</label>
                  <input
                    name="phone"
                    type="number"
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Company Name</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Enter company name"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Product/Chemical</label>
                  <input
                    name="product"
                    type="text"
                    placeholder="Enter chemical name"
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements"
                  className="w-full h-32 rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-2 rounded-lg p-3 font-medium text-white transition ${isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}
              >
                {isSubmitting ? 'Sending Request...' : 'Send Request'}
              </button>
              {result && <span className={`text-sm text-center mt-2 ${getResultColor()}`}>{result}</span>}
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Requestpage
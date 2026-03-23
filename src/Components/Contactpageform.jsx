import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Mail, Clock } from "lucide-react";

const Contactpageform = () => {
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
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
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
    <section className="ml-mr mt-12 lg:mt-20 overflow-x-hidden">
      <div className="grid overflow-hidden rounded-2xl md:rounded-4xl grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col items-center justify-center bg-[var(--background-color)] p-4 sm:p-10 lg:p-12 text-center text-white w-full">
          <h1 className="mt-5 w-full max-w-xl text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight px-1 break-words">
            Strategic Chemical Consultation & Inquiries
          </h1>
          <p className="mt-3 w-full max-w-lg text-sm sm:text-base lg:text-sm xl:text-base text-gray-200 px-2 leading-relaxed break-words">
            Submit your technical requirements and our synthesis experts will coordinate a verified response for your industrial procurement.
          </p>

          {/* Detailed Contact Information */}
          <div className="mt-10 w-full max-w-xl text-left space-y-8 px-4 sm:px-0">
            {/* Head Office */}
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-[var(--button-bg-color)] group-hover:border-transparent transition-all duration-300">
                <MapPin className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--button-bg-color)] mb-1">General inquiries</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                  Sadashiv Chemical Industries Chanchavadarda, Morbi, Gujarat, India - 363641
                </p>
              </div>
            </div>

            {/* Mail & Phone */}
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-[var(--button-bg-color)] group-hover:border-transparent transition-all duration-300">
                <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--button-bg-color)] mb-1">Mail & Phone</h3>
                <a href="mailto:sadashivchemx@gmail.com" className="text-sm sm:text-base text-gray-200 font-medium hover:text-[var(--button-bg-color)] transition-colors block">sadashivchemx@gmail.com</a>
                <p className="text-sm sm:text-base text-white font-bold mt-1">
                  <a href="tel:+919586355000" className="hover:text-[var(--button-bg-color)] transition-colors">+91 95863 55000</a>
                  <span className="mx-1">/</span>
                  <a href="tel:+919586155000" className="hover:text-[var(--button-bg-color)] transition-colors">+91 95861 55000</a>
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex gap-4 items-start group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-[var(--button-bg-color)] group-hover:border-transparent transition-all duration-300">
                <Clock className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[var(--button-bg-color)] mb-1">Working Time</h3>
                <p className="text-sm sm:text-base text-gray-200 font-medium tracking-wide">9:00am – 7:00PM (Monday – Saturday)</p>
                <p className="text-sm sm:text-base text-gray-200 font-medium tracking-wide">Sunday - Closed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 text-black sm:p-10 lg:p-12">
          <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold sm:text-2xl">Send us a message</h2>
            <p className="mt-1 text-xs text-gray-600 sm:text-base">
              Please fill in the details below.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    placeholder="Enter phone number"
                    required
                    className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  required
                  className="w-full h-32 rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`rounded-lg p-3 font-medium text-white transition ${isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {result && <span className={`text-sm text-center mt-2 ${getResultColor()}`}>{result}</span>}
            </form>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-20 overflow-hidden rounded-2xl md:rounded-4xl border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.717569926591!2d70.6881015!3d22.960626299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395a1d0024d6ff57%3A0x15d6e051d5a0b4dd!2sSadashiv%20ChemX%20(Bharat)%20LLP!5e0!3m2!1sen!2sin!4v1770968418966!5m2!1sen!2sin"
          title="Company location"
          className="h-64 w-full sm:h-80 md:h-96 lg:h-150"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contactpageform;

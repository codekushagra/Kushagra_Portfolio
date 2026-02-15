import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const handleContactClick = () => {
    window.open("https://linktr.ee/kushagra.chaturvedi1", "_blank");
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <div className="w-full flex flex-col gap-7 items-center justify-center min-h-[400px]">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                  Let's Connect!
                </h2>
                <p className="text-white-50 text-center md:text-lg">
                  Click below to explore all my social links and get in touch with me.
                </p>
                <button onClick={handleContactClick} className="mt-6">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">Contact Now</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

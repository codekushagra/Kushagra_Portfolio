import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} href={socialImg.href} target="_blank" rel="noreferrer" className={`icon ${socialImg.name === 'instagram' ? 'hover:!bg-gradient-to-r hover:!from-[#833ab4] hover:!via-[#fd1d1d] hover:!to-[#fcb045]' : ''}`}>
              <img src={socialImg.imgPath} alt="social icon" className={`w-1/2 h-1/2 object-contain ${socialImg.name === 'github' || socialImg.name === 'leetcode' ? 'invert' : ''}`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Kushagra Chaturvedi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

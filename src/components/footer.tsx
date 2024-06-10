import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const SocialURLs = (URL: string) => {
    window.location.href = URL;
  };
  return (
    <footer className="mt-auto mr-auto flex flex-col items-center justify-around w-60">
      <p className="text-base mb-5">Created by EMHM </p>
      <section className=" flex flex-row items-center justify-between w-full">
        <p className="text-sm">Connect me with : </p>
        <FaTwitter
          className="cursor-pointer hover:scale-110 "
          size={22}
          onClick={() => SocialURLs("https://twitter.com/MohammadHojja12")}
        />
        <FaLinkedin
          className="cursor-pointer hover:scale-110"
          size={22}
          onClick={() =>
            SocialURLs(
              "https://www.linkedin.com/in/mohammad-hojjat-mahdi-zada-6167b323b/"
            )
          }
        />
        <FaGithub
          className="cursor-pointer hover:scale-110"
          size={22}
          onClick={() => SocialURLs("https://github.com/hojjatmahdave")}
        />
      </section>
    </footer>
  );
};

export default Footer;

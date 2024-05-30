import React from "react";
import { motion } from "framer-motion";
const leftAnimationVar = {
  initial: { opacity: 0, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};
const fadeInAnimationVar = {
  initial: { opacity: 0, x: 30 },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 * index, duration: 0.5 },
  }),
};
const ContactSocial = () => {
  const socials = [
    {
      social: "email",
      username: "haithamb74@gmail.com",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      social: "github",
      username: "MR-b7r",
      link: "https://github.com/MR-b7r",
    },
    {
      social: "linkedin",
      username: "Haitham Bahr",
      link: "https://www.linkedin.com/in/haitham-bahr-b33b1224b/",
    },
    {
      social: "facebook",
      username: "Haitham Bahr",
      link: "https://www.facebook.com/hysem.bahr/",
    },
    {
      social: "frontend mentor",
      username: "Haitham Bahr",
      link: "https://www.frontendmentor.io/profile/MR-b7r",
    },
  ];

  return (
    <motion.div
      className="flex-col gap-y-2 xl:w-1/2"
      variants={leftAnimationVar}
      initial="initial"
      animate="animate"
    >
      <h2 className="md:text-[33px] text-[28px] text-textColor tracking-wider">
        Contact Me on Social
      </h2>
      <div className="flex flex-col space-y-2 pt-5">
        <p className=" text-base text-textColor md:text-2xl">
          <span className="text-textColor">1</span> .socials &#123;{" "}
        </p>
        {socials.map((social, i) => {
          return (
            <motion.div
              className=" text-base md:text-2xl"
              key={social.social}
              variants={fadeInAnimationVar}
              initial="initial"
              animate="animate"
              custom={i}
            >
              <span className="text-textColor">{i + 2}</span>
              <span className="pl-5 text-textColor md:pl-8">
                {social.social}:
              </span>
              <a
                className=" pl-2 text-base text-accentColor hover:underline md:text-2xl"
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                {social.username};
              </a>
            </motion.div>
          );
        })}
        <p className="line text-base text-textColor md:text-2xl">
          <span className="text-textColor">7</span> &#125;
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSocial;

import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "./ContactSection.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const ContactSection = () => {
  const form = useRef();
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  // Handle reCAPTCHA change
  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(!!value);
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    try {
      if (!isCaptchaVerified) {
        toast.error(
          "Please complete the reCAPTCHA to verify you're not a robot.",
          {
            position: "top-right",
            style: { fontWeight: "bold" },
          }
        );
        return;
      }

      emailjs
        .sendForm(
          "service_t0n5f0f",
          "template_8d6m63v",
          form.current,
          "VD_bcxIzXMsHKkPNp"
        )
        .then(
          () => {
            toast.success("Email sent successfully!", {
              style: { fontWeight: "bold" },
            });
            form.current.reset();
            setIsCaptchaVerified(false);
          },
          (error) => {
            console.error("Failed to send email:", error);
            toast.error("Failed to send email. Please try again.", {
              style: { fontWeight: "bold" },
            });
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <motion.div
        id="ContactMe"
        className="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.p
          className="contact-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Get In Touch
        </motion.p>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="contact-subheading">Let's Talk</p>
            <p className="contact-text">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything you’d like me to work on. I'm
              just a message away!
            </p>
            <ul className="contact-details">
              <li>
                <span className="material-symbols-outlined">mail</span>
                vedantdewangan75@gmail.com
              </li>
              <li>
                <span className="material-symbols-outlined">call</span>
                +91 9109436789
              </li>
              <li>
                <span className="material-symbols-outlined">location_on</span>
                Raipur, Chhattisgarh, India
              </li>
            </ul>
          </motion.div>

          <motion.form
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <label htmlFor="name">Enter your name</label>
            <input
              required
              type="text"
              id="name"
              name="from_name"
              placeholder="Enter your name"
              className="form-input"
            />

            <label htmlFor="email">Enter your email</label>
            <input
              required
              type="email"
              id="email"
              name="from_email"
              placeholder="Enter your email"
              className="form-input"
            />

            <label htmlFor="message">Write your message here</label>
            <textarea
              required
              id="message"
              name="message"
              placeholder="Write your message here"
              className="form-textarea"
            ></textarea>

            <ReCAPTCHA
              sitekey="6LdaAXQqAAAAAPA0ypJqYgTZ8QV2UckE8lPbWGgy"
              onChange={handleCaptchaChange}
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </motion.form>
        </motion.div>

        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href="https://github.com/VedantDewangan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vedant-dewangan-844a1825b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/vedant_2703/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};

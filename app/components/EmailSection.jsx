"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false); //update this in the event handler on the submit button
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-26 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/joereeve">
            <Image
              src={GithubIcon}
              alt="github icon"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/joereeve/">
            <Image
              src={LinkedinIcon}
              alt="linkedin icon"
            />
          </Link>
        </div>
      </div>

      <div>
        <form
          action=""
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="something123@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium "
            >
              Subject
            </label>

            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello there"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="fax"
              className="text-white block mb-2 text-sm font-medium "
            >
              Fax Number
            </label>

            <input
              type="text"
              id="fax"
              required
              className="bg-[#18191E] border  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just kidding!"
              disabled
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="bg-[#18191E] border  border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Can't wait to hear from you:)"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;

"use client";

import React, { useRef, useState } from "react";
import { basePath } from "@/lib/basePath";
import emailjs from "@emailjs/browser";

import Image from "next/image";
import {
  Code,
  Terminal,
  Layout,
  Globe,
  Atom,
  Database,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Dashboard() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // PRE-REQ: Create EmailJS account at https://www.emailjs.com/
    // Replace with your actual IDs
    const SERVICE_ID = "service_flzw2pn";
    const TEMPLATE_ID = "template_g7mfczd";
    const PUBLIC_KEY = "sPSYF9JKWfpi8DEJO";

    const handleScrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        () => {
          setIsSending(false);
          setIsSent(true);
          form.current?.reset();
          setTimeout(() => setIsSent(false), 3000); // Reset success message after 3s
        },
        (error) => {
          console.error("FAILED...", error);
          setIsSending(false);
          alert("Failed to send message. Please try again.");
        },
      );
    }
  };

  const IMAGE_SETTINGS = {
    width: "w-64 md:w-80 lg:w-96",
    aspectRatio: "aspect-[3/4]",
    borderRadius: "rounded-2xl",
  };

  return (
    <div className="relative w-full flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-0 left-0 px-7 py-6">
          <img
            src={`${basePath}/logo-header.svg`}
            alt="Logo"
            width={150}
            height={150}
            className="md:w-1/2 lg:w-1/3"
          />
        </div>

        <div className="absolute top-0 right-0 px-7 py-6 hidden md:block">
          <a className="" href="#contact">
            <p className="border px-6 py-2 rounded-full text-white font-display hover:text-black hover:border-orange-100 flex items-center gap-4 bg-white/10 backdrop-blur-md hover:bg-orange-100 transition-all duration-200 ">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              Available
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center justify-center text-center px-4 max-w-4xl z-10">
          <div className="flex flex-col leading-[0.55] items-center">
            <h1 className="lg:text-[400px] md:text-[300px] sm:text-[250px] text-[150px] tracking-[-.06em] font-display font-bold pr-20 text-white select-none">
              putra
            </h1>
            <h1 className="lg:text-[400px] md:text-[300px] sm:text-[250px] text-[150px] tracking-[-.06em] font-display font-normal pl-20 text-white select-none">
              azam
            </h1>
          </div>

          {/* <p className="text-white text-sm md:text-lg mt-20 select-none p-5">
            "Currently pursuing a Bachelor of Computer Science at the Technical
            University of Malaysia Malacca (UTeM), I specialize in bridging the
            gap between clean code and intuitive design. With a focus on
            software development and creative technologies, I am dedicated to
            building functional, user-centric digital experiences. I thrive in
            collaborative environments and am driven by the challenge of turning
            complex problems into elegant software solutions."
          </p> */}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-10 p-8 overflow-hidden"
      >
        <div
          className={`relative flex-shrink-0 ${IMAGE_SETTINGS.width} ${IMAGE_SETTINGS.aspectRatio} ${IMAGE_SETTINGS.borderRadius} overflow-hidden shadow-2xl z-20`}
        >
          <Image
            src={`${basePath}/about-me.jpg`}
            alt="About Me"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-2xl z-10 lg:ml-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Started with a curiosity for how things work, I dove into the world
            of Computer Science. My journey has been driven by a passion for
            solving problems and creating seamless digital experiences. I
            believe in the power of code to bring ideas to life and make a real
            impact. Whether it's crafting user interfaces or architecting
            backend logic, I approach every challenge with dedication and a
            desire to learn.
          </p>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mt-12 mb-8">
            Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[
              { name: "C++", level: 80, icon: <Code size={20} /> },
              { name: "TypeScript", level: 85, icon: <Code size={20} /> },
              { name: "React", level: 85, icon: <Atom size={20} /> },
              { name: "Next.js", level: 80, icon: <Globe size={20} /> },
              { name: "Python", level: 75, icon: <Terminal size={20} /> },
              { name: "HTML/CSS", level: 95, icon: <Layout size={20} /> },
            ].map((skill, index) => (
              <div
                key={index}
                className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 group-hover:text-orange-300 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-lg font-medium text-white">
                    {skill.name}
                  </span>
                  <span className="ml-auto text-sm text-white/50">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500/80 rounded-full group-hover:bg-orange-400 transition-all duration-500 relative"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 blur-[2px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 z-10"
      >
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-16">
          Journey & Experience
        </h2>

        {/* Experience List */}
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          {[
            {
              role: "Software Development Student",
              company: "Technical University of Malaysia Malacca.",
              period: "2023 - Present",
              description:
                "Studying Computer Science at Technical University of Malaysia Malacca.",
            },
            {
              role: "Barista",
              company: "Richiamo Coffee",
              period: "July 2025 - Oct 2025",
              description:
                "Worked as a barista in Richiamo Coffee (during semester break).",
            },
            {
              role: "Store Crew",
              company: "7Eleven Malaysia",
              period: " July 2024 - Oct 2024 ",
              description:
                "Worked as a store crew in 7Eleven Malaysia (during semester break).",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-orange-200 transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-lg text-white/80">{job.company}</p>
                </div>
                <span className="text-sm font-normal text-white bg-white/10 px-4 py-1.5 rounded-full w-fit">
                  {job.period}
                </span>
              </div>
              <p className="text-white/70 leading-relaxed font-light">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 z-10"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-16">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Mail className="text-orange-400" size={24} />,
                  title: "Email",
                  value: "putraazam44@gmail.com",
                  href: "mailto:putraazam44@gmail.com",
                },
                {
                  icon: <Phone className="text-orange-400" size={24} />,
                  title: "Phone",
                  value: "+60 11 2442 8285",
                  href: "tel:+601124428285",
                },
                {
                  icon: <MapPin className="text-orange-400" size={24} />,
                  title: "Location",
                  value: "Malaysia",
                  href: "https://www.google.com/maps/place/Malaysia",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-full bg-white/5 group-hover:bg-orange-500/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/50">{item.title}</span>
                    <span className="text-lg font-medium text-white group-hover:text-orange-200 transition-colors">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-white/70 pl-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-white/70 pl-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-white/70 pl-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all resize-none"
                placeholder="What's on your mind?"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`mt-2 w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 group transition-all ${
                isSent
                  ? "bg-green-500 text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600 active:scale-[0.98]"
              } ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <span>
                {isSent ? "Sent!" : isSending ? "Sending..." : "Send Message"}
              </span>
              {!isSent && !isSending && (
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

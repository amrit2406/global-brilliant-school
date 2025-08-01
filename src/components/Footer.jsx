import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
];

const classLinks = [
  { label: "Class 1", href: "/classes" },
  { label: "Class 2", href: "/classes" },
  { label: "Class 3", href: "/classes" },
  { label: "Class 4", href: "/classes" },
  { label: "Class 5", href: "/classes" },
  { label: "Class 6", href: "/classes" },
  { label: "Class 7", href: "/classes" },
  { label: "Class 8", href: "/classes" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-[#277055] text-white pt-12 pb-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide mb-2">
            Global <span className="text-[#FFC857]">Brilliant</span>{" "}
            <span className="text-white">School</span>
          </h2>
          <p className="text-[#e2eefd] text-base mt-2 max-w-sm leading-relaxed">
            Nurturing bright minds, shaping a brilliant future. Your trusted partner in education excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="uppercase font-bold text-[#FFC857] mb-3">Quick Links</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href} className="mb-2">
                <a
                  href={link.href}
                  className="text-white hover:text-[#FFC857] transition text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Classes */}
        <div>
          <h4 className="uppercase font-bold text-[#FFC857] mb-3">Classes</h4>
          <ul>
            {classLinks.map((link) => (
              <li key={link.href} className="mb-2">
                <a
                  href={link.href}
                  className="text-white hover:text-[#FFC857] transition text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info + Socials */}
        <div>
          <h4 className="uppercase font-bold text-[#FFC857] mb-3">Contact Us</h4>
          <ul className="text-base space-y-2">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-[#FFC857] mt-1" />
              <span>+91 7205837919</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-[#FFC857] mt-1" />
              <span>globalbrillantschool@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#FFC857] mt-1" />
              <span>Pattamundai</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-full bg-white/20 hover:bg-[#FFC857] hover:text-[#277055] transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-white/10 pt-4 text-sm text-[#e2eefd]">
        &copy; {new Date().getFullYear()} Global Brilliant School. All rights reserved.
      </div>

      {/* Optional: Scroll to Top */}
      {/* <div className="text-center mt-3">
        <a
          href="#"
          className="text-sm text-[#FFC857] underline hover:text-white transition"
        >
          Back to Top ↑
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;

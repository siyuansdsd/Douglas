import Logo from "./logo";
import Ins from "@/public/images/ins-logo.svg";
import Linkedin from "@/public/images/linkedin-logo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4">
                  <Logo />
                </div>
                <div className="text-sm text-slate-300">
                  © douglas-yang.com <span className="text-slate-500">-</span>{" "}
                  All rights reserved.
                </div>
              </div>
              {/* Social links */}
              <ul className="flex">
                <li>
                  <a
                    className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                    href="http://linkedin.com/in/思源-杨-5603a0315"
                    aria-label="Linkedin"
                  >
                    <Image
                      src={Linkedin}
                      alt="Linkedin"
                      width={32}
                      height={32}
                      className="flex justify-center items-center transition duration-150 ease-in-out"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-center items-center ml-2 text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                    href="https://www.instagram.com/dou6974?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                    aria-label="Instagram"
                  >
                    <Image
                      src={Ins}
                      alt="Instagram"
                      width={32}
                      height={32}
                      className="flex justify-center items-center transition duration-150 ease-in-out"
                    />
                  </a>
                </li>
                <li className="ml-2">
                  <a
                    className="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                    href="https://github.com/siyuansdsd"
                    aria-label="Github"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Info</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Available: Mon - Fri
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Email: douglas19990310@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Address: SYD-NSW2020
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out"
                  href="#0"
                >
                  Birth: 03-1999
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

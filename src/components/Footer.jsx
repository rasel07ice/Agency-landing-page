import FacebookIcon from "./Icons/FacebookIcon";
import FigmaIcon from "./Icons/FigmaIcon";
import GithubIcon from "./Icons/GithubIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-800">
      <div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        {/* <!-- Sub Footer 1 --> */}
        <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  About
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Careers
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Brand Center
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Help center
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Discord Server
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Twitter
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Facebook
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Licensing
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  About
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Careers
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Brand Center
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Download
            </h3>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  iOS
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Android
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Windows
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* <!-- Sub Footer 2 --> */}
        <div class="flex flex-col items-center gap-3">
          <Logo />
          <span class="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
            <a
              href="#"
              target="_blank"
              class="text-purple-600 hover:underline dark:text-purple-500"
            >
              Flowbite
            </a>{" "}
            and{" "}
            <a
              href="#"
              class="text-purple-600 hover:underline dark:text-purple-500"
            >
              Tailwind CSS
            </a>
            .
          </span>
          <ul class="flex justify-center mt-5 space-x-5">
            <NavLink>
              <FacebookIcon />
            </NavLink>
            <NavLink>
              <InstagramIcon />
            </NavLink>
            <NavLink>
              <TwitterIcon />
            </NavLink>
            <NavLink>
              <GithubIcon />
            </NavLink>
            <NavLink>
              <FigmaIcon />
            </NavLink>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

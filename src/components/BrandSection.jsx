import AirbnbIcon from "./Icons/AirbnbIcon";
import GoogleIcon from "./Icons/GoogleIcon";
import MailchimpIcon from "./Icons/MailchimpIcon";
import MashableIcon from "./Icons/MashableIcon";
import MicrosoftIcon from "./Icons/MicrosoftIcon";
import SpotifyIcon from "./Icons/SpotifyIcon";

const BrandSection = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" class="flex items-center lg:justify-center">
            <AirbnbIcon />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <GoogleIcon />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <MicrosoftIcon />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <SpotifyIcon />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <MailchimpIcon />
          </a>
          <a href="#" class="flex items-center lg:justify-center">
            <MashableIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

import BusinessCard from "./BusinessCard";

const PricingSection = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <BusinessCard />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

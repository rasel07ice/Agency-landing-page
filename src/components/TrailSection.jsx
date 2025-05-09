import Button from "./utility/Button";

const TrailSection = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-sm mx-auto text-center">
          <h2 class="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Start your free trial today
          </h2>
          <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Try Landwind Platform for 30 days. No credit card required.
          </p>
          <div className="w-full md:w-1/3 mx-auto">
            <Button title="Free trial for 30 days" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrailSection;

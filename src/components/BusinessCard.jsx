import { businessCards } from "../assets/data";
import TickIcon from "./Icons/TickIcon.jsx";
import Button from "./utility/Button.jsx";

const BusinessCard = () => {
  return (
    <>
      {businessCards.map((aCard) => (
        <div
          key={aCard.id}
          class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
        >
          <h3 class="mb-4 text-2xl font-semibold">{aCard.title}</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            {aCard.description}
          </p>
          <div class="flex items-baseline justify-center my-8">
            <span class="mr-2 text-5xl font-extrabold">${aCard.price}</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
          </div>

          <ul role="list" class="mb-8 space-y-4 text-left">
            {aCard.features.map((feature) => (
              <li class="flex items-center space-x-3">
                <TickIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button title="Get Started" />
        </div>
      ))}
    </>
  );
};

export default BusinessCard;

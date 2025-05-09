const ServiceCard = ({ children, title, description }) => {
  return (
    <>
      <div className="text-left">
        {children}
        <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
        <p class="font-light text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </>
  );
};

export default ServiceCard;

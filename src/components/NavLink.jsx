const NavLink = ({ children }) => {
  return (
    <>
      <li>
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default NavLink;

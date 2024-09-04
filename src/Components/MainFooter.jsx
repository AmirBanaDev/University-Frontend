function MainFooter() {
  return (
    <>
      <footer className="w-full bg-blue-600">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <a
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
          <img
            src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
            alt="logo-ct"
            className="w-10"
          />
        </div>
      </footer>
    </>
  );
}

export default MainFooter;

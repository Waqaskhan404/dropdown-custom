import * as React from 'react';

import "./DropDownBtn.css";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button className='text-sm ps-4 py-2.5 text-center items-center inline-block text-gray-500 hover:text-gray-700' onClick={handleOpen}>  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg></button>
      {open ? (
        <ul className="menu space-y-1 shadow-lg flex flex-col items-center border border-gray-300">
          <li className="menu-item mt-2  border-b-2  hover:bg-gray-500 w-full">
            <button className="text-black border-none  text-sm px-6 py-2.5 text-center inline-flex items-center " onClick={handleMenuOne}>Edit</button>
          </li>
          <li className="menu-item  hover:bg-gray-500 w-full">
            <button className='text-black border-none  text-sm px-6 py-2.5 text-center inline-flex items-center' onClick={handleMenuTwo}>Update</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default App;

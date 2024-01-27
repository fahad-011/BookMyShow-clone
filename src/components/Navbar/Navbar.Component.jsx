import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import CustomModal from "../Modal/Modal.Component";
import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_OPENCAGE_API_KEY;

function NavSm({ defaultLocation }) {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            {defaultLocation || "Select you..."} <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </>
  );
}

function NavLg({ defaultLocation }) {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&language=en&q=${latitude}+${longitude}`
              );

              const state = response.data.results[0].components.state;
              setLocation(state || defaultLocation);
            } catch (error) {
              console.error("Error getting user location:", error);
              setLocation(defaultLocation);
            }
          },
          (error) => {
            console.error("Error getting user location:", error);
            setLocation(defaultLocation);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser");
        setLocation(defaultLocation);
      }
    };

    getUserLocation();
  }, [defaultLocation]);

  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white ">
            {location || "Select you..."} <BiChevronDown />
          </span>
          <CustomModal />

          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

// Main NavBar Component
const Navbar = ({ defaultLocation }) => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Mobile Screen Navbar */}
      <div className="md:hidden">
        <NavSm defaultLocation={defaultLocation} />
      </div>
      {/* Medium Screen Size */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large Screen Size */}
      <div className="hidden md:hidden lg:flex">
        <NavLg defaultLocation={defaultLocation} />
      </div>
    </nav>
  );
};

export default Navbar;

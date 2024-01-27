import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // console.log(tokenResponse);

      const userInfoEndpoint = "https://www.googleapis.com/oauth2/v3/userinfo";
      const userInfoResponse = await fetch(userInfoEndpoint, {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });

      if (userInfoResponse.ok) {
        const userInfo = await userInfoResponse.json();
        const userObject = {
          given_name: userInfo.given_name,
        };
        localStorage.setItem("user", JSON.stringify(userObject));
        navigate("/");
      } else {
        console.error("Failed to fetch user information");
      }
    },
  });

  return (
    <>
      <button
        onClick={openModal}
        className="bg-red-600 text-white px-2 py-1 text-sm rounded"
      >
        {localStorage.getItem("user")
          ? `Hi, ${JSON.parse(localStorage.getItem("user")).given_name}`
          : "Sign In"}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen flex items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
                <button
                  onClick={closeModal}
                  className="absolute top-8 right-6 text-gray-500 hover:text-gray-700"
                >
                  {/* Close button icon */}
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#666"
                    className="fill-current"
                  >
                    <path d="M13.125 0l-7.5 7.5 7.5 7.5 1.429-1.428L8.482 7.5l6.072-6.071z"></path>
                    <path d="M1.429 0l7.5 7.5-7.5 7.5-1.43-1.428L6.072 7.5 0 1.43z"></path>
                  </svg>
                </button>

                <h2 className="text-2xl font-bold text-center mb-12">
                  Get Started
                </h2>

                {/* Continue with Google */}
                <button
                  onClick={() => {
                    localStorage.clear();
                    googleLogin();
                    closeModal();
                  }}
                  className="border border-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full w-full mb-4 flex items-center justify-center"
                >
                  <span className="mr-2">
                    {/* Google logo SVG */}
                    <img
                      src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg"
                      alt="Google Logo"
                      className="w-6 h-6"
                    />
                  </span>
                  Continue with Google
                </button>

                {/* Continue with Apple */}
                <button className="border border-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full w-full mb-4 flex items-center justify-center">
                  <span className="mr-2">
                    {/* Apple logo SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 170 170"
                      aria-labelledby="apple-label"
                      role="img"
                    >
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"></path>
                    </svg>
                  </span>
                  Continue with Apple
                </button>

                {/* Continue with Email */}
                <button className="border border-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full w-full mb-4 flex items-center justify-center">
                  <span className="mr-2">
                    <img
                      src="https://in.bmscdn.com/webin/common/icons/email.svg"
                      alt="Email Logo"
                      className="w-6 h-6"
                    />
                  </span>
                  Continue with Email
                </button>

                {/* Terms & Conditions */}
                <div className="flex items-center justify-center mt-16">
                  <label
                    htmlFor="termsCheckbox"
                    className="text-center text-gray-600 text-sm"
                  >
                    I agree to the{" "}
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Terms & Conditions
                    </a>{" "}
                    &amp;{" "}
                    <a
                      href="/privacy"
                      target="_blank"
                      className="text-blue-500"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CustomModal;

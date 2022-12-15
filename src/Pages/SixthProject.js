import React from "react";
import pro1 from "../assets/project/6-1.png";
import pro2 from "../assets/project/6-2.png";
import pro3 from "../assets/project/6-3.png";

const SixthProject = () => {
  return (
    <div>
      <div>
        <h2 className="min-h-screen mx-10">
          <div className="md:mt-40 mt-16"></div>
          <div className="md:grid md:grid-cols-3 gap-5">
            <img className="w-full" src={pro1} alt="" />
            <img className="w-full" src={pro2} alt="" />
            <img className="w-full" src={pro3} alt="" />
          </div>
          <div className="mt-10 flex gap-3 ">
            <a
              className="no-underline"
              target={"_blank"}
              rel="noreferrer"
              href="https://sprightly-fox-8e5c98.netlify.app/"
            >
              <h2 className="text-xl text-blue-400">Project Live-link</h2>
            </a>
            <a
              className="no-underline"
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Al-Shaharia-Ifty/Unique-Creation-Event-Management"
            >
              <h2 className="text-xl text-blue-400">GitHub Client-link</h2>
            </a>
            <a
              className="no-underline"
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/nazruldigital/genius-car-service-server-repo"
            >
              <h2 className="text-xl text-blue-400">GitHub Server-link</h2>
            </a>
          </div>
          <div>
            <h2>About This Project.</h2>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl m-0 pl-2">
                Online Event Management base website
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl m-0 pl-2">
                User can take service in real life
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl m-0 pl-2">
                Also have a dashboard and user and admin can use it.
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl m-0 pl-2">
                Firebase Authentication system.
              </p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl m-0 pl-2">Mongodb is use for database.</p>
            </div>
            <div>
              <h3 className="text-lg mt-3 font-bold">
                Technology:{" "}
                <span className="font-normal">
                  daisyui, date-fns, firebase, react, react-day-picker,
                  react-dom, react-firebase-hooks, react-hook-form, react-query,
                  react-router-dom, react-scripts, react-toastify,
                </span>
              </h3>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default SixthProject;

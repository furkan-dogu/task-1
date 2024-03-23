"use client"

import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { projects } from "@/helpers/sidebarProjects";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const { fullName, email } = useSelector(state=>state.auth)
  return (
    <div className="flex w-1/8">
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-[#363f72]">
        <div className="px-2">
          <ul>
            {[0,1,2,3].map(item=>(
              <li key={item}>
                <Link
                  href=""
                  className={`group relative flex justify-center rounded p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 my-2`}
                >
                  <BellIcon className="h-8 w-8" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0">
          <div className="px-2">
            <ul>
            {[0,1,2,3].map(item=>(
              <li key={item}>
                <Link
                  href=""
                  className={`group relative flex justify-center rounded p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-700 my-2`}
                >
                  <BellIcon className="h-8 w-8" aria-hidden="true" />
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <a href="#" class="flex items-center gap-2 p-4">
            <img
              alt=""
              src="https://avatars.githubusercontent.com/u/140394399?v=4"
              class="size-8 rounded-full object-cover"
            />
          </a>
        </div>
      </div>

      <div className="flex h-screen flex-1 flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <h2 className="font-semibold">Projeler</h2>
          <ul className="mt-14 space-y-1">
            {projects.map((project) => (
              <li key={project.id}>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium">{project.title}</span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    {project.details.map((detail) => (
                      <li key={detail.id}>
                        <Link
                          href=""
                          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                          {detail.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-gray-100">
          <Link
            href=""
            class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <div>
              <p class="text-xs">
                <strong class="block font-medium">{fullName}</strong>

                <span>{email}</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

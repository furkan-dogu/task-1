import { BellIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <nav className="border border-gray-200">
      <div className="mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8"
              src="https://www.kargakarga.com/assets/images/shared/karga-logo.png"
              alt="logo"
            />
          </div>

          <div className="flex items-center pr-2 gap-x-4">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-500 hover:bg-gray-100"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-500 hover:bg-gray-100"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
              <img className="h-12" src="./images/25.jpeg" alt="25logo" />
          </div>
        </div>
      </div>
    </nav>
  );
}

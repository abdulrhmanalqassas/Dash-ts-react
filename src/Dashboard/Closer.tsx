import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { MobileMenu, DiscloserPanel } from "./MobileMenu";
import ProfilePenal from "./ProfilePenal";

const user = {
  name: "alQassas Cook",
  email: "alQassas@gmail.com",
  imageUrl:
    "https://randomuser.me/api/portraits/men/9.jpg",
};
const navigation = [
  { name: "Dashboard", href: "/", current: false },
  { name: "Team", href: "/team", current: false },
  { name: "Projects", href: "Dash-ts-react/projects", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Closer = () => (
  <Disclosure as="nav" className="bg-gray-800">
    {({ open }: { open: any }) => (
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="alQassas"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className=" hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <ProfilePenal
                  user={user}
                  userNavigation={userNavigation}
                ></ProfilePenal>
              </div>
            </div>
            {/* {MobileBnal} */}
            <MobileMenu open={open}></MobileMenu>
          </div>
        </div>

        <DiscloserPanel
          userNavigation={userNavigation}
          user={user}
          navigation={navigation}
        ></DiscloserPanel>
      </>
    )}
  </Disclosure>
);

export default Closer;

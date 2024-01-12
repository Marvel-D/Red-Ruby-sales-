"use client";
import { PageRoutes } from "@/app/lib/definitions";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  //   console.log(path);

  let PageRoutes: PageRoutes[] = [
    {
      id: 0,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: 1,
      title: "Orders",
      link: "/dashboard/orders",
    },
    {
      id: 2,
      title: "Customers",
      link: "/dashboard/customers",
    },
    {
      id: 3,
      title: "Inventory",
      link: "/dashboard/inventory",
    },
    {
      id: 4,
      title: "Conversations",
      link: "/dashboard/conversation",
    },
    {
      id: 5,
      title: "Settings",
      link: "/dashboard/settings",
    },
  ];
  //  color scheme is black background, white text, blue hovers
  return (
    <div className="flex flex-col w-[270px] gap-16 p-8 bg-black text-white">
      <section id="logo">Rail Runner</section>

      <section id="routes">
        <ul className="flex flex-col gap-4">
          {PageRoutes.map((route: PageRoutes) => (
            <Link href={route.link} key={route.id}>
              <li
                className={clsx("p-3 rounded hover:bg-blue-500", {
                  "bg-blue-700": path === route.link,
                })}
              >
                <p>{route.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </div>
  );
};

export { Sidebar };

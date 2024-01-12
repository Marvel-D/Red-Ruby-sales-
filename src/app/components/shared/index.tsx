"use client";
import { Button } from "@chakra-ui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Btn = ({
  color,
  text,
  route,
  width,
  variant,
}: {
  color: string;
  text: string;
  route: any;
  width: string;
  variant: string;
}) => {
  return (
    <Link
      href={route}
      className={`whitespace-nowrap ${
        width || "w-fit"
      } text-xs tablet:text-base px-2 tablet:px-6 py-2 rounded hover:opacity-80 flex items-center transition ease-in-out delay-150`}
    >
      <Button colorScheme={color} variant={variant}>
        {text}
      </Button>
    </Link>
  );
};

// const ButtonMailto = ({ mailto, label }) => {
//   return (
//     <Link
//       href="#"
//       onClick={(e) => {
//         window.location.href = `mailto:${mailto}`;
//         e.preventDefault();
//       }}
//     >
//       {label}
//     </Link>
//   );
// };

export { Btn };

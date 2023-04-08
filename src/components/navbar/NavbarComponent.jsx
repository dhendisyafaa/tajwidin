import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavbarComponent = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-0 text-center w-full text-xs text-darkGreen font-semibold">
      <Link href="/">
        <div
          className={classNames(
            `px-3 py-2 rounded-s-lg`,
            router.pathname === "/"
              ? "bg-green border border-transparent"
              : "bg-transparent border border-green"
          )}
        >
          <p>Belajar Tajwid</p>
        </div>
      </Link>
      <Link href="/waqaf">
        <div
          className={classNames(
            `px-3 py-2  rounded-e-lg`,
            router.pathname === "/waqaf"
              ? "bg-green border border-transparent"
              : "bg-transparent border border-green"
          )}
        >
          <p>Tanda Waqaf</p>
        </div>
      </Link>
    </div>
  );
};

export default NavbarComponent;

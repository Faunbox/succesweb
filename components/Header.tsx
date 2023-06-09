"use client";
import { navigation } from "../data/navigation";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="center sticky left-0 top-0 flex w-screen bg-white/70 p-4 backdrop-blur-sm">
      <div className="container">
        {/* <div ></div> */}
        <div className="flex flex-row items-start justify-start">
          <ul className="container mx-auto flex flex-col items-start justify-start">
            {navigation.map((obj) => (
              <li className="mx-3" key={obj.name}>
                <Link href={obj.href}>{obj.name}</Link>
              </li>
            ))}
          </ul>
          <Link href={"/"}>
            <p className="mr-4 text-2xl font-bold">SuccessWeb</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

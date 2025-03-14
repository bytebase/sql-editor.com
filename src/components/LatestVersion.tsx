"use client";

import Link from "next/link";
import Icon from "./Icon";
import { VERSION, RELEASE_DATE } from "@/consts/common";

const LatestVersion = () => {
  const latestVersion = `${VERSION} (${RELEASE_DATE})`;

  return (
    <Link
      className={`${
        !latestVersion && "invisible"
      } flex flex-row justify-center items-center my-2 mb-4 px-4 py-2 rounded-full text-sm bg-orange-100 text-gray-800 border border-orange-200 hover:shadow-sm hover:bg-orange-200`}
      href="https://github.com/bytebase/bytebase/releases"
      target="_blank"
    >
      <span className="mr-2">🎉</span>
      Latest Release:
      <span className="font-medium ml-1">{latestVersion}</span>
      <Icon.ArrowRight className="w-4 h-auto ml-1" />
    </Link>
  );
};

export default LatestVersion;

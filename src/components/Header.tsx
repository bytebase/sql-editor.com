"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsGithub, BsStar } from "react-icons/bs";
import Banner from "./Banner";
import Icon from "./Icon";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./kit/DropdownMenu";

const Header = () => {
  const [pageScrolled, setPageScrolled] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setPageScrolled(window.scrollY > 0);
    });
  }, []);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/bytebase/bytebase');
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 transition-all bg-white bg-opacity-80 backdrop-blur-lg z-10 w-full mx-auto flex flex-col justify-center items-center",
        pageScrolled && "shadow-sm",
        pageScrolled ? "pt-0" : "pt-2",
      )}
    >
      {false && <Banner text="🤩 20k GitHub Stars in Just 2 Years" url="/blog/20k-github-stars-in-2-years" />}
      <div className="max-w-7xl w-full mx-auto py-2 px-4 sm:px-10 flex flex-row justify-between items-center">
        <div className="w-auto flex flex-row justify-start items-center">
          <Link href="/">
            <div className="cursor-pointer flex flex-row justify-start items-center hover:opacity-80">
              <span className="sr-only">SQL Editor</span>
              <img src="/logo-full.png" className="h-9 sm:h-10 w-auto mr-2" alt="" />
            </div>
          </Link>
        </div>
        <div className="w-auto flex flex-row justify-end items-center space-x-2 sm:space-x-3">
          <div className="w-auto hidden sm:flex flex-row justify-end items-center space-x-2 sm:space-x-3 font-medium text-zinc-700">
            <Link className="w-auto flex flex-row justify-center items-center hover:underline hover:text-teal-600" href="/docs">
              Docs
            </Link>
            <span className="font-mono text-gray-300">/</span>
            <Link className="w-auto flex flex-row justify-center items-center hover:underline hover:text-teal-600" href="/blog">
              Blog
            </Link>
            <span className="font-mono text-gray-300">/</span>
            <Link
              className="w-auto flex flex-row justify-center items-center hover:underline hover:text-teal-600"
              href="https://github.com/bytebase/bytebase"
              target="_blank"
            >
              <span className="hidden sm:block">GitHub</span>
              <BsGithub className="w-5 h-auto ml-1" />
              {starCount !== null && (
                <div className="flex items-center ml-2 bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                  <BsStar className="w-3 h-auto mr-1 text-yellow-500" />
                  <span>{starCount.toLocaleString()}</span>
                </div>
              )}
            </Link>
          </div>
          <div className="sm:hidden">
            <HeaderMobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderMobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/bytebase/bytebase');
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="outline-hidden" asChild>
        <Icon.Menu className="w-6 h-auto opacity-80" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem>
          <Link className="w-full" href="/docs" onClick={() => setOpen(false)}>
            Docs
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className="w-full" href="/blog" onClick={() => setOpen(false)}>
            Blog
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-zinc-100" />
        <DropdownMenuItem>
          <Link
            className="w-full flex flex-row justify-start items-center"
            href="https://github.com/bytebase/bytebase"
            target="_blank"
            onClick={() => setOpen(false)}
          >
            <BsGithub className="w-5 h-auto mr-1 -mt-0.5" /> GitHub
            {starCount !== null && (
              <div className="flex items-center ml-2 bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                <BsStar className="w-3 h-auto mr-1 text-yellow-500" />
                <span>{starCount.toLocaleString()}</span>
              </div>
            )}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;

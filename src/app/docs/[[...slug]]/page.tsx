import { Tag } from "@markdoc/markdoc";
import { Button } from "@mui/joy";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import ContentRender from "@/components/ContentRender";
import Icon from "@/components/Icon";
import SectionContainer from "@/components/SectionContainer";
import TableOfContent from "@/components/TableOfContent";
import { GITHUB_REPO_LINK } from "@/consts/common";
import { getContentFilePaths, getFilePathFromSlugs, readFileContenxt } from "@/lib/content";
import { markdoc } from "@/markdoc/markdoc";
import { getMetadata } from "@/utils/metadata";
import Navigation, { NavigationMobileMenu } from "./navigation";

interface Props {
  params: Promise<{ slug: string[] }>;
}

const Page = async (props: Props) => {
  const params = await props.params;
  const filePath = getFilePathFromSlugs("docs", params.slug);
  const content = readFileContenxt(filePath);
  if (!content) {
    return notFound();
  }

  const { frontmatter, transformedContent } = markdoc(content);
  const remoteFilePath = `${GITHUB_REPO_LINK}/blob/main/${filePath}`;
  if (!transformedContent || !(transformedContent instanceof Tag)) {
    return null;
  }

  const children = transformedContent.children;
  const headings = JSON.parse(
    JSON.stringify(
      children.filter((child) => child instanceof Tag && child.name === "Heading" && [2, 3].includes(child.attributes["level"])),
    ),
  ) as Tag[];

  return (
    <SectionContainer>
      <div className="w-full flex flex-row justify-start items-start sm:px-6 sm:gap-6">
        <div className="hidden sm:block sticky top-24 h-[calc(100svh-6rem)] w-40 shrink-0">
          <div className="relative w-full h-full overflow-auto py-4 no-scrollbar">
            <Navigation />
          </div>
          <div className="absolute top-0 left-0 w-full h-8 bg-linear-to-t from-transparent to-white pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-b from-transparent to-white pointer-events-none"></div>
        </div>
        <div className="w-full sm:max-w-[calc(100%-10rem)] lg:max-w-[calc(100%-20rem)] sm:px-4">
          <div className="block sm:hidden w-full">
            <NavigationMobileMenu />
          </div>
          <h1 className="w-full text-3xl sm:text-5xl font-medium sm:font-bold my-6">{frontmatter.title}</h1>
          <ContentRender markdocNode={transformedContent} />
          <div className="mt-12">
            <Button size="sm" variant="outlined" color="neutral" startDecorator={<Icon.Edit className="w-4 h-auto" />}>
              <Link href={remoteFilePath} target="_blank">
                Edit this page
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block sticky top-24 h-[calc(100svh-6rem)] w-40 shrink-0">
          <div className="relative w-full h-full overflow-auto py-4 no-scrollbar">
            <TableOfContent headings={headings} />
          </div>
          <div className="absolute top-0 left-0 w-full h-8 bg-linear-to-t from-transparent to-white"></div>
          <div className="absolute bottom-0 left-0 w-full h-8 bg-linear-to-b from-transparent to-white"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const filePath = getFilePathFromSlugs("docs", params.slug);
  const content = readFileContenxt(filePath);
  if (!content) {
    return notFound();
  }

  const { frontmatter } = markdoc(content);
  return getMetadata({
    title: frontmatter.title + " - SQL Editor",
    pathname: params.slug?.length > 0 ? `/docs/${params.slug.join("/")}` : "/docs",
  });
};

export const generateStaticParams = () => {
  const filePaths = getContentFilePaths("docs");
  return [
    { slug: [] },
    ...[...filePaths.map((filePath) => filePath.split("/"))].map((contentSlug) => {
      return { slug: contentSlug };
    }),
  ];
};

export default Page;

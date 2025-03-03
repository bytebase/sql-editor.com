import DemoPlaceholder from "@/components/DemoPlaceholder";
import FeatureMetrix from "@/components/FeatureMetrix";
import LatestVersion from "@/components/LatestVersion";
import SectionContainer from "@/components/SectionContainer";

const Page = () => {
  return (
    <>
      <div className="w-full bg-linear-to-b from-white to-teal-50">
        <h1 className="sr-only">SQL Editor</h1>
        <div className="mt-4 sm:mt-6 w-full flex flex-col justify-start items-center">
          <LatestVersion />
        </div>
        <div className="w-full flex flex-col justify-center items-center px-4 sm:px-16">
          <h2 className="w-full max-w-3xl text-center text-3xl sm:text-5xl font-serif font-medium mt-4 mb-4">{"Universal SQL Editor"}</h2>
          <h3 className="w-full text-lg sm:text-2xl text-gray-600 text-center font-serif">Open Source. Online. Self-hosted. Multi-user.</h3>
        </div>
        <DemoPlaceholder />
      </div>
      <SectionContainer>
        <FeatureMetrix />
      </SectionContainer>
    </>
  );
};

export default Page;

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  slug?: string;
}

export const MAIN_FEATURES: FeatureItem[] = [
  {
    icon: "🦦",
    slug: "open-source",
    title: "Open Source",
    description: "All code available on GitHub for transparency and collaboration.",
  },
  {
    icon: "🪶",
    slug: "lightweight",
    title: "Lightweight",
    description: "Single docker container, no dependencies. No need to install any client software.",
  },
  {
    icon: "🤝",
    slug: "multi-user",
    title: "Multi-user",
    description: "Multi-user mode with fine-grained access control.",
  },
  {
    icon: "🤖",
    slug: "ai-powered",
    title: "AI-powered",
    description: "AI assistant to help you write SQL queries, explain queries, and more.",
  },
  {
    icon: "🏛️",
    slug: "governed",
    title: "Governed",
    description: "Fine-grained access control, dynamic data masking, and audit logging.",
  },
  {
    icon: "🧩",
    slug: "embeddable",
    title: "Embeddable",
    description: "Can be embedded into any website or application.",
  },
];

const SUB_FEATURES: FeatureItem[] = [
  {
    icon: "🌟",
    title: "12,000+",
    description: "GitHub Stars",
  },
  {
    icon: "📈",
    title: "3,000,000+",
    description: "Docker Pulls",
  },
  {
    icon: "📦",
    title: "Bi-weekly for 4 years",
    description: "Releases",
  },
];

const FeatureMetrix = () => {
  return (
    <>
      <div className="w-full mb-8 mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 sm:px-12">
        {MAIN_FEATURES.map((featureItem) => (
          <div key={featureItem.title} className="w-full flex flex-col justify-start items-start rounded-2xl">
            <div className="flex flex-row items-center gap-2 sm:gap-4 sm:flex-col sm:items-start">
              <span className="text-3xl sm:text-5xl">{featureItem.icon}</span>
              <span className="text-base sm:text-xl">{featureItem.title}</span>
            </div>
            <p className="mt-1 text-sm sm:text-base text-gray-500">{featureItem.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full mt-12 sm:px-12">
        <div className="w-full bg-teal-50 border-2 border-teal-600 shadow-sm rounded-xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {SUB_FEATURES.map((featureItem) => (
            <div key={featureItem.title} className="w-full flex flex-row justify-start items-center gap-4">
              <span className="text-3xl sm:text-5xl">{featureItem.icon}</span>
              <div className="flex flex-col justify-center items-start whitespace-nowrap">
                <p className="text-sm sm:text-base text-gray-500">{featureItem.description}</p>
                <p className="relative text-lg font-medium font-mono sm:text-xl">{featureItem.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureMetrix;

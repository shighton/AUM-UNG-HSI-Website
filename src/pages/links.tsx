import React from "react";

const InfoLinks: InfoLinkProps[] = [
  {
    img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    title: "AUM-UNG-HSI Research",
    description:
      "Project Github page with Dr. Kursun's fixes",
    links: [
      {
        link: "https://github.com/shighton/AUM-UNG-HSI-Research",
        title: "View on Github",
      },
    ],
  },
  {
    img: "https://yt3.ggpht.com/ytc/AKedOLT-hB3o0KmEz46j12f59PTEDEjvBqMzH1j8L8w1=s900-c-k-c0x00ffffff-no-rj",
    title: "AUM-UNG-HSI-Research-7-31-2023 Container",
    description:
      "This SIF container includes Dr. Kursun's fixes for the previous container.",
    links: [
      {
        link: "https://cloud.sylabs.io/library/shighton/hsi/aum-ung-hsi-research-7-31-2023",
        title: "View on Syslab",
      },
    ],
  },
];

const ResourceLinks: InfoLinkProps[] = [
  {
    img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    title: "AUM-UNG-HSI-Research Github",
    description:
      "The project Github folder with Dr. Kursun's fixes.",
    links: [
      {
        link: "https://github.com/shighton/AUM-UNG-HSI-Research",
        title: "View on Github",
      },
    ],
  },
  {
    img: "https://www.nicepng.com/png/detail/764-7642487_user-guides-user-guide-icon.png",
    title: "Expanse User Guide",
    description:
      "The expanse user guide",
    links: [
      {
        link: "https://www.sdsc.edu/support/user_guides/expanse.html",
        title: "View User Guide",
      },
    ],
  },
];

const GatewayLinks: InfoLinkProps[] = [
  {
    img: "https://airavata.apache.org/assets/img/airavata-logo.png",
    title: "AUM-UNG Gateway",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    links: [
      {
        link: "https://gateway.ung.scigap.org/auth/login?next=/workspace/dashboard",
        title: "Visit Gateway",
      },
    ],
  },
  {
    img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    title: "Gateway Custom UI Implementation",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    links: [
      {
        link: "https://github.com/deepp0925/frontend",
        title: "View on Github",
      },
      {
        link: "https://deepp0925.github.io/frontend/",
        title: "View on Website",
      },
    ],
  },
];

const DocumentationLink: InfoLinkProps[] = [
  {
    img: "https://ahana.io/wp-content/uploads/2021/04/518px-Jupyter_logo.svg_.png",
    title: "Documentation",
    description:
      "Jay's version of the Jupyter Book",
    links: [
      {
        link: "https://jkleine.github.io/JupyterBookUpdate/intro.html",
        title: "View Documentation",
      },
    ],
  },
];

const ResultsLink: InfoLinkProps[] = [
  {
    img: "https://ahana.io/wp-content/uploads/2021/04/518px-Jupyter_logo.svg_.png",
    title: "Results Excel File",
    description:
      "Spreadsheet file for results",
    links: [
      {
        //link: "../Documents/DeepHyperXData.xlsx",
        link: "https://ungprod.sharepoint.com/:x:/s/NSFResearchProjectAModularMultilayerFrameworkforReal-Time355/EVTB8Aoeeh5Gl7oVVpC4ffYBSt2k7VW9pukEofI0Oa8JbQ?e=XtHlCJ",
        title: "View Results",
      },
    ],
  },
];

export default function Links() {
  return (
    <div className="px-8 pb-20">
      <h1 className="text-xl font-semibold">Source Code</h1>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {InfoLinks.map((info) => (
          <div className="col-span-1" key={info.title}>
            <InfoLink {...info} />
          </div>
        ))}
      </div>
      <h1 className="text-xl font-semibold mt-12">Gateway</h1>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {GatewayLinks.map((info) => (
          <div className="col-span-1" key={info.title}>
            <InfoLink {...info} />
          </div>
        ))}
      </div>
      <h1 className="text-xl font-semibold mt-12">Documentation</h1>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {DocumentationLink.map((info) => (
          <div className="col-span-1" key={info.title}>
            <InfoLink {...info} />
          </div>
        ))}
      </div>
      <h1 className="text-xl font-semibold mt-12">Resources</h1>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {ResourceLinks.map((info) => (
          <div className="col-span-1" key={info.title}>
            <InfoLink {...info} />
          </div>
        ))}
      </div>
      <h1 className="text-xl font-semibold mt-12">Results</h1>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {ResultsLink.map((info) => (
          <div className="col-span-1" key={info.title}>
            <InfoLink {...info} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface LinkDetails {
  title: string;
  link: string;
}

interface InfoLinkProps {
  img: URL | string;
  title: string;
  description: string;
  links: LinkDetails[];
}

function InfoLink({ img, title, description, links }: InfoLinkProps) {
  return (
    <div className="flex w-full h-auto border border-zinc-400 p-3 rounded-md">
      <img
        src={img as unknown as string}
        className="object-contain h-40 rounded-md"
      />
      <div className="ml-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text flex-1">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {links.map((details) => (
            <div className="col-span-1" key={details.title}>
              <a href={details.link} target="_blank" className="text-blue-500">
                {details.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

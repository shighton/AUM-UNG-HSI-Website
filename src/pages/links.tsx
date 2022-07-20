import React from "react";

const InfoLinks: InfoLinkProps[] = [
  {
    img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    title: "AUM-Dataset",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    link: "https://github.com/Fennrii/AUM-UNG-HSI-Repository",
    linkTitle: "View on Github",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AKedOLT-hB3o0KmEz46j12f59PTEDEjvBqMzH1j8L8w1=s900-c-k-c0x00ffffff-no-rj",
    title: "AUM Container - Version 1",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    link: "https://cloud.sylabs.io/library/andrew_satory/aum_ung_three_layer/aum-dataset",
    linkTitle: "View on Syslab",
  },
  {
    img: "https://yt3.ggpht.com/ytc/AKedOLT-hB3o0KmEz46j12f59PTEDEjvBqMzH1j8L8w1=s900-c-k-c0x00ffffff-no-rj",
    title: "AUM Container - Version 2",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    link: "https://cloud.sylabs.io/library/andrew_satory/aum_ung_three_layer/aum-dataset",
    linkTitle: "View on Syslab",
  },
  {
    img: "https://airavata.apache.org/assets/img/airavata-logo.png",
    title: "AUM-UNG Gateway",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    link: "https://gateway.ung.scigap.org/auth/login?next=/workspace/dashboard",
    linkTitle: "Visit Gateway",
  },
  {
    img: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
    title: "Gateway Custom UI Implementation",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    link: "https://github.com/deepp0925/frontend",
    linkTitle: "View on Github",
  },
  {
    img: "https://ahana.io/wp-content/uploads/2021/04/518px-Jupyter_logo.svg_.png",
    title: "Documentation",
    description:
      "This branch changed the threeLayer model to allow it to be run using different datasets, and also updated models.py to allow for larger datasets ",
    link: "https://fennrii.github.io/JupyterBook/intro.html",
    linkTitle: "View Documentation",
  },
];

export default function Links() {
  return (
    <div className="px-8 pb-20">
      <h1 className="text-xl font-semibold">Links</h1>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {InfoLinks.map((info) => (
          <div className="col-span-1" key={info.title}>
            <InfoLink {...info} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface InfoLinkProps {
  img: URL | string;
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

function InfoLink({ img, title, description, link, linkTitle }: InfoLinkProps) {
  return (
    <div className="flex w-full max-h-52 border border-zinc-400 p-3 rounded-md">
      <img
        src={img as unknown as string}
        className="object-contain h-40 rounded-md"
      />
      <div className="ml-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text flex-1">{description}</p>
        <a href={link} target="_blank" className="text-blue-500">
          {linkTitle}
        </a>
      </div>
    </div>
  );
}

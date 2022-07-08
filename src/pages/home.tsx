import React from "react";

export function Home() {
  return (
    <>
      <div className="main-img-wrapper">
        <img
          src="https://raw.githubusercontent.com/Deepp0925/research_project_website/master/src/images/clouds.jpg"
          className="w-full object-cover"
        />
        <div className="text-wrapper">
          <div className="h-full w-full flex flex-col md:flex-row px-8 md:px-20 py-10 md:py-0 md:items-center justify-center">
            <span className="text-white md:leading-relaxed flex-1 flex items-center text-center md:text-left font-extrabold uppercase text-3xl md:text-5xl">
              Hyperspectral Image Segmentation Research Project
            </span>
            <div className="btns w-full md:w-5/12 h-auto flex md:flex-col items-end">
              <button className="rounded-md text-white text-xl bg-green-600 w-full md:w-48 py-4">
                View Playground
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 px-8">
        <p className="text-lg">
          We propose to develop a real time, multi-layer, and modular
          segmentation framework for hyperspectral images (HSI). Our framework
          aims to automatically identify various regions within a hyperspectral
          image by classifying each pixel of the image and associating them to
          class segments. We will develop a multi-layer system, where each
          layer's responsibility is to perform an operation on its input,
          generate region classification data, and pass the resultant output to
          the next layer. Importantly, each layer analyzesits input from
          distinct viewpoints, utilizing spectral and spatial data, resulting in
          a multi-layer framework where the layers complement each other. Since
          the system is highly parallelizable, we will exploit high performance
          computing (HPC) tools and resources to achieve a real-time
          performance.
        </p>
        <br />
        <p className="text-lg">
          Although the proposed framework is a domain independent solution, we
          will apply it to the atmospheric cloud detection problem, where cloud
          albedos on the earth's surface are measured by field experts. We have
          chosen this problem for two reasons: 1) cloud detection is a unique
          and challenging problem involving multi-class classification and
          segmentation to evaluate our framework; and 2) to the best of our
          knowledge, HSI has not been applied to the cloud detection problem.
          With the rich spectral information from a large portion of the
          spectrum, HSI has a big potential for accurate cloud region detection.
          Our initial data analysis supported this argument by identifying more
          informative features at beyond visible light.
        </p>
        <br />
        <p className="text-lg">
          The proposed project will be implemented in collaboration by two
          predominantly undergraduate institutions: Auburn University at
          Montgomery (AUM) and University of North Georgia (UNG). The duration
          of the project will be three years and consist of four phases. In the
          first year, our research will focus on data collection and initial
          data analysis (Phase 1). In the second year, we will build
          classification models, create simulations, and implement prototypes of
          the system (Phase 2). In the same year, we will start the integration
          of HPC tools to the classification models (Phase 3). Finally in the
          third year, we will complete implementation, testing, and deployment
          of the open-source software (Phase 4). The project will be managed by
          two PIs Dr. Semih Dinc and Dr. Luis Cueva Parra.
        </p>
      </div>
      <div className="mt-16">
        <p className="text-center italic text-lg font-bold">Conducted By:</p>
        <div className="flex flex-col md:flex-row md:w-11/12 lg:w-8/12 xl:w-7/12 m-auto items-center mt-8">
          <div className="flex flex-1 justify-center text-center h-64 w-64">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5915e824579fb3ad10cd5aa6/1573180421630-WEFZT728CPLHNBY1AQQ3/AUM+online.jpg?format=500w"
              alt="AUM"
              className="object-contain"
            />
          </div>
          <div className="flex flex-1 justify-center text-center h-64 w-64">
            <img
              src="https://raw.githubusercontent.com/Deepp0925/research_project_website/master/src/images/ung.png"
              alt="UNG"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-16">
        <p className="text-center italic text-lg font-bold">Sponsored By:</p>
        <div className="flex flex-col md:flex-row md:w-11/12 lg:w-8/12 xl:w-7/12 m-auto items-center mt-8">
          <div className="flex flex-1 justify-center text-center h-36 w-36">
            <img
              src="https://www.seekpng.com/png/full/41-419411_nsf-all-black-or-all-white-vector-nsf.png"
              alt="NSF"
              className="object-contain"
            />
          </div>
          <div className="flex flex-1 justify-center text-center h-64 w-64 mt-20 md:mt-0">
            <img
              src="https://www.xsede.org/image/image_gallery?uuid=5787b7c0-b9e5-4eaa-8f6c-815ebf39eb08&groupId=10157&t=1369258426992"
              alt="xsede"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="footer bg-slate-800 w-full mt-8">
        <div className="w-11/12 md:container mx-auto flex flex-col md:flex-row py-10">
          <p className="text-lg text-white font-medium w-full md:w-72 xl:w-96">
            Hyperspectral Research
          </p>
          <div className="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 grid grid-flow-row mt-5 md:mt-0">
              <span className="text-stone-400 row-span-1">Links</span>
              <span className="text-white row-span-1 pb-2">Link 1</span>
              <span className="text-white row-span-1 pb-2">Link 2</span>
              <span className="text-white row-span-1 pb-2">Link 3</span>
            </div>
            <div className="col-span-1 grid grid-flow-row mt-5 md:mt-0">
              <span className="text-stone-400 row-span-1">Information</span>
              <span className="text-white row-span-1">About</span>
              <span className="text-white row-span-1">Meetings</span>
              <span className="text-white row-span-1">Collabrators</span>
            </div>
          </div>
          <div className="col-span-1 grid grid-flow-row mt-5 md:mt-0">
            <span className="text-stone-400 row-span-1">Contact</span>
            <span className="text-white row-span-1 pb-2">Email</span>
            <span className="text-white row-span-1 pb-2">
              Call: 123-456-7890
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

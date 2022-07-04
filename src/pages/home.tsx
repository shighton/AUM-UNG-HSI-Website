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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis
          urna cursus eget nunc. Ut eu sem integer vitae justo eget magna
          fermentum iaculis. Ut tristique et egestas quis ipsum suspendisse.
          Quisque id diam vel quam elementum. Auctor neque vitae tempus quam
          pellentesque nec. At auctor urna nunc id cursus. Non sodales neque
          sodales ut etiam sit amet nisl purus. Faucibus pulvinar elementum
          integer enim neque volutpat. Nulla facilisi cras fermentum odio eu
          feugiat pretium. Sapien faucibus et molestie ac feugiat sed lectus.
          Varius vel pharetra vel turpis. Quis auctor elit sed vulputate mi. Nam
          at lectus urna duis convallis convallis. Scelerisque eu ultrices vitae
          auctor eu. Pretium vulputate sapien nec sagittis aliquam malesuada
          bibendum arcu vitae. Vitae congue eu consequat ac felis donec et. Eget
          sit amet tellus cras adipiscing enim eu turpis. Quam vulputate
          dignissim suspendisse in est ante. Facilisis sed odio morbi quis
          commodo. Sit amet facilisis magna etiam tempor orci eu lobortis.
          Mattis rhoncus urna neque viverra justo. Natoque penatibus et magnis
          dis parturient montes nascetur. Massa sapien faucibus et molestie ac
          feugiat. Elit scelerisque mauris pellentesque pulvinar pellentesque
          habitant. Facilisis volutpat est velit egestas dui. Libero volutpat
          sed cras ornare arcu dui. Faucibus et molestie ac feugiat sed lectus
          vestibulum mattis ullamcorper. Viverra vitae congue eu consequat.
          Molestie a iaculis at erat pellentesque adipiscing commodo elit. Risus
          commodo viverra maecenas accumsan lacus vel facilisis volutpat. Mauris
          cursus mattis molestie a. Lacus vestibulum sed arcu non odio. Purus ut
          faucibus pulvinar elementum integer. In fermentum et sollicitudin ac.
          Ipsum suspendisse ultrices gravida dictum fusce ut. Nec nam aliquam
          sem et tortor consequat. Cursus sit amet dictum sit amet. Duis
          ultricies lacus sed turpis. Tincidunt vitae semper quis lectus. Morbi
          tincidunt augue interdum velit euismod in pellentesque. Arcu cursus
          vitae congue mauris rhoncus aenean vel. Interdum velit euismod in
          pellentesque massa placerat duis ultricies. Facilisis mauris sit amet
          massa vitae tortor condimentum lacinia quis. Interdum posuere lorem
          ipsum dolor sit amet consectetur adipiscing. Enim blandit volutpat
          maecenas volutpat blandit aliquam etiam erat velit. Diam maecenas
          ultricies mi eget.
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

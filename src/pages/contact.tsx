import React from "react";

interface ContactPerson {
  name: string;
  email: string;
  phone: string;
  image: URL | string;
}
const FACULTIES: ContactPerson[] = [
  {
    name: "Luis A. Cueva Parra",
    email: "Luismail@mail.com",
    phone: "123-456-7890",
    image: new URL("../imgs/cueva_parra_luis.jpeg", import.meta.url),
  },
  {
    name: "Semih Dinc",
    email: "semihdinc@mail.com",
    phone: "123-456-7890",
    image: new URL("../imgs/dinc_semih.jpeg", import.meta.url),
  },
  {
    name: "Olcay Kursun",
    email: "olcaykursunmail@mail.com",
    phone: "123-456-7890",
    image: new URL("../imgs/Olcay_Kursun.jpeg", import.meta.url),
  },
  {
    name: "Randy Russel",
    email: "randyrusselmail@mail.com",
    phone: "123-456-7890",
    image: new URL("../imgs/russell_randy.jpeg", import.meta.url),
  },
];

export default function Contact() {
  return (
    <div className="px-8">
      <h1 className="text-xl font-semibold">Contact</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
        <div className="col-span-1 border-stone-400 border p-8 rounded-md flex">
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Email</h1>
            <p className="text-sm">Someemail@mail.com</p>
            <h1 className="text-lg font-semibold mt-3">Phone</h1>
            <p className="text-sm">123-456-7890</p>
            <h1 className="text-lg font-semibold mt-3">Address</h1>
            <p className="text-sm">123 Main St.</p>
            <p className="text-sm">Atlanta, GA</p>
          </div>
          <div className="h-52 w-52 md:h-10">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5915e824579fb3ad10cd5aa6/1573180421630-WEFZT728CPLHNBY1AQQ3/AUM+online.jpg?format=500w"
              alt="AUM"
              className="object-contain"
            />
          </div>
        </div>
        <div className="col-span-1 border-stone-400 border p-8 rounded-md flex">
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Email</h1>
            <p className="text-sm">Someemail@mail.com</p>
            <h1 className="text-lg font-semibold mt-3">Phone</h1>
            <p className="text-sm">123-456-7890</p>
            <h1 className="text-lg font-semibold mt-3">Address</h1>
            <p className="text-sm">123 Main St.</p>
            <p className="text-sm">Atlanta, GA</p>
          </div>
          <div className="h-52 w-52 md:h-10">
            <img
              src="https://raw.githubusercontent.com/Deepp0925/research_project_website/master/src/images/ung.png"
              alt="UNG"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
        {FACULTIES.map((person) => (
          <div className="col-span-1 rounded-md flex flex-col">
            <div className="w-full h-80 mx-auto">
              <img
                className="w-80 h-80 mx-auto object-cover rounded-md"
                src={person.image as unknown as string}
                alt={person.name}
              />
            </div>
            <div className="Collaborator-info mt-2 text-center">
              <h2 className="font-semibold text-lg">{person.name}</h2>
              <h3 className="font-semibold text-sm">{person.email}</h3>
              <h3 className="font-semibold text-sm">{person.phone}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

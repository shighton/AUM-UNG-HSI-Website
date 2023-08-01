import React from "react";

const FACULTIES: CollaboratorProps[] = [
  {
    name: "Luis A. Cueva Parra",
    title: "Professor",
    school: "University of North Georgia, Dahlonega, GA",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image: new URL("../imgs/cueva_parra_luis.jpeg", import.meta.url),
  },
  {
    name: "Semih Dinc",
    title: "Professor",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image: new URL("../imgs/dinc_semih.jpeg", import.meta.url),
  },
  {
    name: "Olcay Kursun",
    title: "Professor",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image: new URL("../imgs/Olcay_Kursun.jpeg", import.meta.url),
  },
  {
    name: "Randy Russel",
    title: "Professor",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image: new URL("../imgs/russell_randy.jpeg", import.meta.url),
  },
];

const STUDENTS = [
  {
    name: "Sabastian Highton",
    title: "Super Amazing Student Researcher",
    school: "University of North Georgia, Dahlonega, GA",
    desc: "Worked during the Summer of 2023.",
    image: new URL("../imgs/Sabastian_Highton.png", import.meta.url),
  },
  {
    name: "Jay Kleine",
    title: "Super Extraordinary Student Researcher",
    school: "University of North Georgia, Dahlonega, GA",
    desc: "Worked during the Summer of 2023.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "Giovanni Bellio",
    title: "Student",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "Stone Franklin",
    title: "Undergraduate Research Student",
    school: "University of North Georgia, Dahlonega, GA",
    desc: "Worked during summer and fall 2021",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "Benjamin Kim",
    title: "Student",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "Chengyuan Ma",
    title: "Student",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image: new URL("../imgs/ma_chengyuan.jpg", import.meta.url),
  },

  {
    name: "Michael Navarro",
    title: "Student",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "Ben Nguyen",
    title: "Student",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "Deep Patel",
    title: "Undergraduate Research Student",
    school: "University of North Georgia, Dahlonega, GA",
    desc: "Worked during summer 2022",
    image: new URL("../imgs/patel_deep.jpg", import.meta.url),
  },
  {
    name: "Smit Patel",
    title: "Undergraduate Research Student",
    school: "University of North Georgia, Dahlonega, GA",
    desc: "Worked during summer and fall 2021",
    image: new URL("../imgs/patel_smit.jpeg", import.meta.url),
  },
  {
    name: "Thao Pham",
    title: "Student",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "Andrew Satory",
    title: "Undergraduate Research Student",
    school: "University of North Georgia, Dahlonega, GA",
    desc: "Worked during summer 2022",
    image: new URL("../imgs/satory_andrew.jpg", import.meta.url),
  },
  {
    name: "Kylie Tran",
    title: "Student",
    school: "Aurbun University at Montgomery, AL",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
];

export default function Collaborators() {
  return (
    <div className="Collabrators px-8">
      <h1 className="font-semibold text-xl">Collabrators</h1>
      <h1 className="font-semibold text-xl mt-10">Faculty/ Staff</h1>
      <div className="grid mt-5 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FACULTIES.map((collaborator, i) => (
          <div key={i} className="col-span-1 text-center lg:text-left">
            <Collaborator {...collaborator} />
          </div>
        ))}
      </div>

      <h1 className="font-semibold text-xl mt-10">Student Assistants</h1>
      <div className="grid mt-5 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {STUDENTS.map((collaborator, i) => (
          <div key={i} className="col-span-1 text-center lg:text-left">
            <Collaborator {...collaborator} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface CollaboratorProps {
  name: string;
  title: string;
  image: URL | string;
  school: string;
  desc: string;
}

function Collaborator(props: CollaboratorProps) {
  return (
    <div className="Collaborator">
      <div className="w-full h-80 mx-auto">
        <img
          className="w-80 h-80 mx-auto object-cover rounded-md"
          src={props.image as unknown as string}
          alt={props.name}
        />
      </div>
      <div className="Collaborator-info mt-2">
        <h2 className="font-semibold text-lg">{props.name}</h2>
        <h3 className="font-semibold text-sm">{props.title}</h3>
        <h3 className="font-semibold text-sm">{props.school}</h3>
        <p className="text-xs h-20">{props.desc}</p>
      </div>
    </div>
  );
}

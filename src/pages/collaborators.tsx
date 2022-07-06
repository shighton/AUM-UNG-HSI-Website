import React from "react";

const FACULTIES: CollaboratorProps[] = [
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
];

const STUDENTS = [
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
    desc: "John Doe is a Professor at the University of California, Berkeley. He is the head of the Department of Computer Science and the Director of the Center for Computational Science and Engineering.",
    image:
      "https://cdn.britannica.com/85/205685-050-24677990/Ryan-Reynolds-2011.jpg",
  },
  {
    name: "John Doe",
    title: "Professor",
    school: "University of California, Berkeley",
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
  image: string;
  school: string;
  desc: string;
}

function Collaborator(props: CollaboratorProps) {
  return (
    <div className="Collaborator">
      <div className="w-full h-80 mx-auto">
        <img
          className="w-80 h-80 mx-auto object-cover rounded-md"
          src={props.image}
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

import React from "react";

enum StepStatus {
  ACTIVE,
  COMPLETED,
  PLANNED,
}

interface StepProps {
  title: string;
  desc: string;
  status: StepStatus;
}

function Step({ title, desc, status }: StepProps) {
  let statusClass = "";
  if (status === StepStatus.ACTIVE) {
    statusClass = "active";
  } else if (status === StepStatus.COMPLETED) {
    statusClass = "completed";
  }

  return (
    <li className={"c-stepper__item " + statusClass}>
      <div className="c-stepper__content lg:w-4/6">
        <h3 className="c-stepper__title">{title}</h3>
        <p className="c-stepper__desc">{desc}</p>
      </div>
    </li>
  );
}

const TIMELINE: StepProps[] = [
  {
    title: "Step 6",
    desc: `
    Fusce fermentum nulla id eros aliquam, non blandit 
    ante malesuada. Quisque accumsan et odio sed venenatis. 
    Mauris id lacus at velit feugiat suscipit nec quis augue. 
    Etiam consequat dui dui, sed feugiat turpis malesuada quis. 
    Vestibulum sed augue fringilla, facilisis quam et, pharetra nisl. 
    Aenean in sem dui. Praesent elementum sed tortor quis facilisis. 
    Aenean sit amet lorem tempor, porttitor turpis eget, vulputate nisi. 
    Mauris nisl turpis, ornare a nibh vehicula, pharetra faucibus erat. 
    Etiam a ante at mauris luctus bibendum. Ut venenatis tellus id sagittis laoreet.
    Suspendisse ornare et velit sit amet fringilla. Duis est risus, 
    elementum vitae faucibus sit amet, suscipit a eros. Morbi turpis 
    dolor, accumsan at est et, dapibus imperdiet tortor. 
    Morbi ex lectus, tristique nec porta id, tincidunt eget sem.
    Donec molestie nisl non lacinia cursus.
    `,
    status: StepStatus.PLANNED,
  },
  {
    title: "Step 5",
    desc: `
    Fusce fermentum nulla id eros aliquam, non blandit 
    ante malesuada. Quisque accumsan et odio sed venenatis. 
    Mauris id lacus at velit feugiat suscipit nec quis augue. 
    Etiam consequat dui dui, sed feugiat turpis malesuada quis. 
    Vestibulum sed augue fringilla, facilisis quam et, pharetra nisl. 
    Aenean in sem dui. Praesent elementum sed tortor quis facilisis. 
    Aenean sit amet lorem tempor, porttitor turpis eget, vulputate nisi. 
    Mauris nisl turpis, ornare a nibh vehicula, pharetra faucibus erat. 
    Etiam a ante at mauris luctus bibendum. Ut venenatis tellus id sagittis laoreet.
    Suspendisse ornare et velit sit amet fringilla. Duis est risus, 
    elementum vitae faucibus sit amet, suscipit a eros. Morbi turpis 
    dolor, accumsan at est et, dapibus imperdiet tortor. 
    Morbi ex lectus, tristique nec porta id, tincidunt eget sem.
    Donec molestie nisl non lacinia cursus.
    `,
    status: StepStatus.ACTIVE,
  },
  {
    title: "Step 4",
    desc: `
    Fusce fermentum nulla id eros aliquam, non blandit 
    ante malesuada. Quisque accumsan et odio sed venenatis. 
    Mauris id lacus at velit feugiat suscipit nec quis augue. 
    Etiam consequat dui dui, sed feugiat turpis malesuada quis. 
    Vestibulum sed augue fringilla, facilisis quam et, pharetra nisl. 
    Aenean in sem dui. Praesent elementum sed tortor quis facilisis. 
    Aenean sit amet lorem tempor, porttitor turpis eget, vulputate nisi. 
    Mauris nisl turpis, ornare a nibh vehicula, pharetra faucibus erat. 
    Etiam a ante at mauris luctus bibendum. Ut venenatis tellus id sagittis laoreet.
    Suspendisse ornare et velit sit amet fringilla. Duis est risus, 
    elementum vitae faucibus sit amet, suscipit a eros. Morbi turpis 
    dolor, accumsan at est et, dapibus imperdiet tortor. 
    Morbi ex lectus, tristique nec porta id, tincidunt eget sem.
    Donec molestie nisl non lacinia cursus.
    `,
    status: StepStatus.ACTIVE,
  },
  {
    title: "Step 3",
    desc: `
    Fusce fermentum nulla id eros aliquam, non blandit 
    ante malesuada. Quisque accumsan et odio sed venenatis. 
    Mauris id lacus at velit feugiat suscipit nec quis augue. 
    Etiam consequat dui dui, sed feugiat turpis malesuada quis. 
    Vestibulum sed augue fringilla, facilisis quam et, pharetra nisl. 
    Aenean in sem dui. Praesent elementum sed tortor quis facilisis. 
    Aenean sit amet lorem tempor, porttitor turpis eget, vulputate nisi. 
    Mauris nisl turpis, ornare a nibh vehicula, pharetra faucibus erat. 
    Etiam a ante at mauris luctus bibendum. Ut venenatis tellus id sagittis laoreet.
    Suspendisse ornare et velit sit amet fringilla. Duis est risus, 
    elementum vitae faucibus sit amet, suscipit a eros. Morbi turpis 
    dolor, accumsan at est et, dapibus imperdiet tortor. 
    Morbi ex lectus, tristique nec porta id, tincidunt eget sem.
    Donec molestie nisl non lacinia cursus.
    `,
    status: StepStatus.COMPLETED,
  },
  {
    title: "Step 2",
    desc: `
    Fusce fermentum nulla id eros aliquam, non blandit 
    ante malesuada. Quisque accumsan et odio sed venenatis. 
    Mauris id lacus at velit feugiat suscipit nec quis augue. 
    Etiam consequat dui dui, sed feugiat turpis malesuada quis. 
    Vestibulum sed augue fringilla, facilisis quam et, pharetra nisl. 
    Aenean in sem dui. Praesent elementum sed tortor quis facilisis. 
    Aenean sit amet lorem tempor, porttitor turpis eget, vulputate nisi. 
    Mauris nisl turpis, ornare a nibh vehicula, pharetra faucibus erat. 
    Etiam a ante at mauris luctus bibendum. Ut venenatis tellus id sagittis laoreet.
    Suspendisse ornare et velit sit amet fringilla. Duis est risus, 
    elementum vitae faucibus sit amet, suscipit a eros. Morbi turpis 
    dolor, accumsan at est et, dapibus imperdiet tortor. 
    Morbi ex lectus, tristique nec porta id, tincidunt eget sem.
    Donec molestie nisl non lacinia cursus.
    `,
    status: StepStatus.COMPLETED,
  },
  {
    title: "Step 1",
    desc: `
    Fusce fermentum nulla id eros aliquam, non blandit 
    ante malesuada. Quisque accumsan et odio sed venenatis. 
    Mauris id lacus at velit feugiat suscipit nec quis augue. 
    Etiam consequat dui dui, sed feugiat turpis malesuada quis. 
    Vestibulum sed augue fringilla, facilisis quam et, pharetra nisl. 
    Aenean in sem dui. Praesent elementum sed tortor quis facilisis. 
    Aenean sit amet lorem tempor, porttitor turpis eget, vulputate nisi. 
    Mauris nisl turpis, ornare a nibh vehicula, pharetra faucibus erat. 
    Etiam a ante at mauris luctus bibendum. Ut venenatis tellus id sagittis laoreet.
    Suspendisse ornare et velit sit amet fringilla. Duis est risus, 
    elementum vitae faucibus sit amet, suscipit a eros. Morbi turpis 
    dolor, accumsan at est et, dapibus imperdiet tortor. 
    Morbi ex lectus, tristique nec porta id, tincidunt eget sem.
    Donec molestie nisl non lacinia cursus.
    `,
    status: StepStatus.COMPLETED,
  },
];

export default function Timeline() {
  return (
    <div className="px-8">
      <h1 className="text-lg font-semibold">Timeline</h1>
      <div className="wrapper mt-12">
        <ol className="c-stepper">
          {TIMELINE.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </ol>
      </div>
    </div>
  );
}

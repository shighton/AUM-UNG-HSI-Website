import React from "react";

export default function About() {
  return (
    <div className="px-8">
      <h1 className="text-xl font-semibold">About</h1>
      <br />
      <p className="text-lg">
        The goal of this research project is to develop a real time
        hyperspectral image (HSI) segmentation tool using machine learning
        models that are optimized by high performance computation (HPC).
        Hyperspectral images provide rich spectral information, where each pixel
        has hundreds of features collected froma wide range of electromagnetic
        spectrum. Our proposed system will identify/ classify HSI pixels intoone
        or more target classes on the image, where eventually segment(s) of
        target region(s) will be formed by the individual pixel decisions. Our
        ultimate goal is to publish an open-source framework for users in
        different disciplines to analyze/ classify their HSI data. We will
        design the system with flexibility in mind so that various techniques
        and methods could be used as modules within different layers. In this
        way, users will experiment with different modules and tune the framework
        to the needs of their application.
      </p>
      <p className="text-lg">
        This project also aims to achieve high segmentation accuracy without
        sacrificing in the computation time. To optimize the classification
        model and deliver real-time performance, we will employ several
        parallelization tools and libraries including CPU and GPU level
        parallelism, as well as available remote cluster computers. Users of the
        system, if they have sufficient HPC resources, will be able to achieve
        comparable computational performance without experience in
        parallelization or HPC.
      </p>
      <p className="text-lg">
        The proposed system is a three layer framework, where each layer
        improves the accuracy of the results from previous layers. Our first
        layer is highly parallelizable, where data is classified from distinct
        viewpoints. We initially propose two novel components for this layer
        (Contour Learner and Reference Learner), however, the framework allows
        employing other classifiers as well. The second layer includes an
        Ensemble Learner module receiving lists of scores from first layer. By
        combining these scores, it generates a new set of probability scores
        that are expected to be more accurate. Finally, the last layer is added
        to boost the performance of the system even further. Employing a
        Locality Learner utilizes more information from the image itself and the
        relative positioning of pixels.
      </p>
      <img
        className="object-contain mt-20 mb-5 mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
        src={
          new URL(
            "../imgs/processing_model.png",
            import.meta.url
          ) as unknown as string
        }
        alt="processing-model"
      />
      <p className="mx-auto text-center mb-20">
        Overview of the proposed open-source framework
      </p>
      <p className="text-lg">
        Although the proposed framework is designed to be independent from a
        problem domain, in this project we will apply our system to solve the
        “Atmospheric Cloud Detection” problem, where the cloud regions in a sky
        image are segmented to determine their density and location. Accurate
        and consistent cloud and weather observations remain critically
        important for weather prediction, climatology, andhydrology. Cloud
        detection is a unique problem with significant challenges, and to the
        best of our knowledge there have been no previous attempts to solve it
        using Hyperspectral images.
      </p>
      <p className="text-lg">
        There is a three year plan to implement this project. Starting from Fall
        2020, Fall and Spring semesters will be dedicated to training students
        via newly designed courses, attending conferences and presenting current
        results. The Summer semesters will implement the project, which will be
        conducted in four phases:
      </p>
      <br />
      <ul className=" list-disc text-lg px-4">
        <li className="mb-1">
          <em className="font-semibold">Phase 1:</em> Data Collection and
          Analysis
        </li>
        <li className="mb-1">
          <em className="font-semibold">Phase 2:</em> Building Classification
          Model and Prototyping
        </li>
        <li className="mb-1">
          <em className="font-semibold">Phase 3:</em> HPC integration and
          Software Design
        </li>
        <li className="mb-1">
          <em className="font-semibold">Phase 4:</em> Software Implementation,
          Testing, and Deployment
        </li>
      </ul>
      <br />
      <p className="text-lg">
        In the first year, our research will focus on data collection and
        initial data analysis (Phase 1). In the second year, we will build
        classification models, create simulations, and implement prototypes of
        the system. In the same year, in parallel, we will start the integration
        of HPC tools to the classification models (Phase 2 and Phase 3).
        Finally, in the third year we will complete implementation, testing, and
        deployment of the open-source software (Phase 4).
      </p>
      <p className="text-lg mb-20">
        This project will be implemented in collaboration by two institutions:
        Auburn University at Montgomery (AUM) and University of North Georgia
        (UNG). AUM and UNG are predominantly teaching universities located in
        Alabama and Georgia, respectively. These institutions value and support
        undergraduate research by providing seed funding opportunities to
        faculty and students and facilitating undergraduate research
        dissemination by organizing undergraduate research symposiums and
        conferences. Additionally, this project will help us to design and offer
        new courses that are not currently in the curriculum of AUM and UNG.
      </p>
    </div>
  );
}

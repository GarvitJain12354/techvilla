import React from "react";

const AdityaSir = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden justify-center items-center">
      <div className="blue"></div>
      <div className="violet"></div>
      <div className="flex w-full relative z-40 mt-40 px-16 text-white max-md:flex-col max-md:px-4 max-md:items-center max-md:justify-center">
        <div className="img h-60 w-60 shrink-0">
          <img className="rounded-xl" src={"/AdityaSir.jpg"} alt="" />
        </div>
        <div className="flex flex-col px-16  py-4 gap-4 max-md:px-0 max-md:text-center max-md:w-full max-md:gap-">
          <h1 className="text-5xl font-semibold max-md:mt-32 max-md:text-3xl">
            Prof. Aditya Patel
          </h1>
          <h3 className="text-2xl font-semibold max-md:text-lg">
            M.Tech With Sub/topic “Privacy Preservation in Horizontally
            Partitioned Database by using Cryptography Techniques”, in 2017,
            form RGPV Bhopal
          </h3>
          <h3 className="text-2xl font-semibold max-md:text-lg">
            Specialization: Machine Learing , Internet of Things , Block chain ,
            Python, NLP .
          </h3>
          <p className="text-xl max-md:text-base max-md:px-2">
            Prof. Aditya Patel, an Assistant Professor in Computer Science and
            Engineering at LNCT Bhopal, possesses an impressive academic and
            professional background. He completed his Masters Degree in Software
            Engineering after earning a B.Tech in IT . Prof. Patel's academic
            journey has been marked by significant scholarly contributions. He
            has published over 40 research papers, book chapters, and books at
            both national and international levels, with notable publications in
            IEEE, Elsevier, and Springer. His authorship extends to 10 books
            published by prestigious publishers like IGI Global, Taylor and
            Francis, and Lambert. <br /> Beyond his academic achievements, Prof.
            Aditya Patel is an active contributor to the research community. He
            serves as a reviewer for reputable journals and is a life member of
            ISTE and IEEE. With a decade of teaching and research experience,
            Prof. Patel has delivered expert lectures in offline and online
            modes, sharing his expertise with students and peers. <br /> His
            accolades include winning the first prize in the Smart India
            Hackathon 2021 and the ToyCathalon 2021. He presently serves as an
            evaluator and judge at SIH (Smart India Hackathon) and is an
            Evaluation Ambassador of IIC – MIC (Institution's Innovation Council
            - MHRD Innovation Cell). Prof. Patel's dedication to innovation is
            further highlighted by his association with the Kalchuri LNCT Group
            Incubation Center, where he actively promotes various innovations
            and startups. <br /> As a versatile professional, Prof. Patel is
            also a skilled web designer and developer, having worked on more
            than 50 websites and software projects. His research interests
            encompass machine learning, IoT, and blockchain, and he has
            supervised 20 M.Tech dissertations to date, contributing
            significantly to the academic and entrepreneurial ecosystem. ·
          </p>
          <h1 className="text-xl max-md:w-full max-md:text-center">
            <i className="ri-newspaper-line"></i> No. of research paper
            published : 32{" "}
          </h1>
          <h1 className="text-xl w-full flex items-center gap-1 max-md:justify-center">
            <img className="h-5 w-5 object-contain" src="/book.png" alt="" />
            No. of books published : 12
          </h1>
          <h1 className="text-xl max-md:w-full max-md:text-center">
            <i className="ri-star-fill"></i> Total work experience 10 years
          </h1>
          <h1 className="text-xl underline underline-offset-8 max-md:underline-offset-2 max-md:text-left max-md:pl-4">Seminar/Conferences/Expert Lecture/FDPs</h1>

          <ul className="list-disc max-md:px-5 max-md:text-base text-left">
            <li>
              Conducted Seminar on "INTELLECTUAL PROPERTY RIGHTS" at LNCT Bhopal
            </li>
            <li>
              Workshop on " Industrial Application of Internet of Things"{" "}
            </li>
            <li>
              Expert Lecture Delivered on "Conducting Market Survey and Data
              Collection for identified business opportunities" at IISER Bhopal.
            </li>
            <li>
              Expert Lecture Delivered on "Design of Experiments and Advanced
              Optimization Techniques" at Aryan Group of colleges, Rajpura.
            </li>
            <li>
              Expert Lecture Delivered on "RESEARCH OPPORTUNITIES AND CHALLENGES
              IN ENGINEERING" at OIST Bhopal
            </li>
            <li>
              Expert Lecture Delivered on "Problem-Solution Fit and
              Product-Market Fit" at Dr. D.Y.Patil Unitech Society's Dr. D. Y.
              Patil Arts Commerce and Science College Pimpri, Pune
            </li>
            <li>
              Workshop on "How to plan for Start-up and legal & Ethical Steps"
              at GYAN GANGA COLLEGE OF TECHNOLOGY, JABALPUR
            </li>
            <li>
              Workshop on Design Thinking, Critical thinking and Innovation
              Design at JNCT Bhopal
            </li>
            <li>
              Organized FDP on Recent Advances in Communication networks and
              systems, SVNIT.
            </li>
            <li>
              Workshop on "Entrepreneurship and Innovation" as Career
              Opportunity at LNCT Bhopal
            </li>
          </ul>
          <h1 className="text-xl underline underline-offset-8 max-md:underline-offset-2 max-md:text-left max-md:pl-4">Achievements</h1>
          <ul className="list-disc max-md:px-5 max-md:text-base text-left">
            <li>Member CSI</li>
            <li>Life Member ISTE</li>
            <li>
              Innovation Ambassador of IIC – MIC (Institution's Innovation
              Council - MHRD Innovation Cell)
            </li>
            <li>Reviewer at Various journals</li>
          </ul>
          <h1 className="text-xl underline underline-offset-8 max-md:underline-offset-2 max-md:text-left max-md:pl-4">Award/ Project</h1>
          <ul className="list-disc max-md:px-5 max-md:text-base text-left">
            <li>Srijan Best Faculty Award 2019</li>
            <li>SIH 2021 Winner Team Mentor</li>
            <li>SIH 2022/2023 Evaluator and Judge</li>
            <li>ToyCathalon 2021 Evaluator and Judge</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdityaSir;

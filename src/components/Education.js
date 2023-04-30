import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Education = () => {
  return (
    <div
      id="education"
      className="min-h-screen p-4 flex flex-col items-center justify-evenly"
    >
      <h4 className="text-center font-mont tracking-widest">Education</h4>
      <p className="font-mont tracking-widest text-center max-w-md">
        In this section, you will find information about my academic
        qualifications and relevant certifications. My education has provided me
        with a strong foundation in software development and has prepared me to
        tackle complex projects with confidence
      </p>
      <section className="xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 gap-4 ss:flex ss:flex-col xs:flex xs:flex-col w-full items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <h5 className="font-mont tracking-widest">Degree</h5>
            <FaGraduationCap className=" duration-300 hover:cursor-pointer hover:scale-75 h-[40px] w-[40px] fill-teal-700" />
          </div>
          <section className="font-mont flex flex-col  w-full ">
            <h5>
              Institution
              <span className="float-right">Kabarak University</span>
            </h5>
            <p>
              Program <span className="float-right">Computer science</span>
            </p>
            <h5>
              year <span className="float-right">2020-2024</span>
            </h5>
          </section>
        </div>
        <div className=" flex flex-col justify-center items-center font-mont tracking-wider ">
          <div className="flex items-center gap-2">
            <h5 className="">Certifications & Bootcamps</h5>
            <GrCertificate className=" duration-300 hover:cursor-pointer hover:scale-75 h-[40px] w-[40px] fill-teal-700" />
          </div>

          <div className="flex flex-wrap gap-2">
            <div>image</div>
            <div>image</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

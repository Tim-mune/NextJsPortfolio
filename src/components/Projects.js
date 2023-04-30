import { projects } from "@/utils/projects";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
const Projects = () => {
  const [number, setNumber] = useState(0);
  const project = projects[number];
  const [allProjects, hideAllProject] = useState(false);
  const ShowAll = () => {
    hideAllProject(!allProjects);
  };
  const length = projects.length - 1;
  const handleProjectNext = () => {
    if (number > length) {
      console.log(number);
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  };
  const handleProjectBefore = () => {
    if (number <= 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };

  return (
    <div
      id="Projects"
      className="min-h-screen p-4 flex justify-evenly items-center flex-col"
    >
      <section className="flex flex-col justify-center items-center gap-4">
        <h4 className="text-center font-mont tracking-widest">Projects</h4>
        <p className="font-Dancing text-center text-2xl tracking-widest">
          featured projects
        </p>
        <button onClick={ShowAll} className=" bg-slate-950 rounded-full">
          <AiOutlineFundProjectionScreen className=" duration-300 hover:cursor-pointer hover:scale-75 h-[50px] w-[50px] fill-teal-700" />
        </button>
      </section>

      <section className="flex justify-center items-center gap-8">
        <button className=" bg-slate-950 rounded-full">
          <FaChevronLeft
            onClick={handleProjectBefore}
            className=" duration-300 hover:cursor-pointer hover:scale-75 h-[40px] w-[40px] fill-teal-700"
          />
        </button>

        <SimpleGrid
          minWidth="300px"
          maxWidth="500px"
          height="full"
          spacing="20px"
          marginTop="20px"
          display="flex"
          alignItems="center"
          justifyItems="center"
        >
          <Box
            bg="telegram.50"
            minH="80px"
            borderRadius="12px"
            p="15px"
            color="gray.700"
            mt="2px"
            display="flex"
            flexDirection="column"
          >
            <div className="flex items-center justify-center rounded-full">
              <img
                src=""
                alt={project.name}
                className="w-full object-contain"
              />
            </div>
            <h4 className="font-mont mt-2 font-semibold">{project.name}</h4>
            <p className="font-mont">{project.description}</p>
            <div className="flex"></div>
            <Link
              className="bg-slate-950 w-1/3 text-center text-white rounded-lg tracking-widest capitalize hover:bg-teal-600 hover:text- hover:border-2 border-teal-950"
              href={project.url}
            >
              test it
            </Link>
          </Box>
          {/* {projects.map((item, index) => {
          const { name, url, technologies, description } = item;
          return (
            <Box
              bg="telegram.50"
              minH="80px"
              borderRadius="12px"
              p="4px"
              color="gray.700"
              mt="2px"
              display="flex"
              flexDirection="column"
            >
              <div className="flex items-center justify-center">
                <img src="" alt={name} className="w-full object-contain" />
              </div>
              <h4 className="font-mont mt-2 font-semibold">{name}</h4>
              <p className="font-mont">{description}</p>
              <div className="flex"></div>
              <Link href={url}>Test drive</Link>
            </Box>
          );
        })} */}
        </SimpleGrid>
        <button className="bg-slate-950 rounded-full ">
          <FaChevronRight
            onClick={handleProjectNext}
            className="duration-300 hover:cursor-pointer hover:scale-75 h-[40px] w-[40px] fill-teal-700"
          />
        </button>
      </section>
    </div>
  );
};

export default Projects;

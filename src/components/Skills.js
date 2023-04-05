import { CardHeader, Card, CardBody, CardFooter } from "@chakra-ui/card";
import {
  SimpleGrid,
  Box,
  Spacer,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/layout";
import { IoSchoolOutline } from "react-icons/io";
import { Stacks } from "@/utils/Stacks";
import { Languages } from "@/utils/Languages";
import { Frameworks } from "@/utils/Frameworks";
import { Button } from "@chakra-ui/button";
const { FrontEnd, Backend, mobile } = Stacks;
const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center">
      <h2 className="capitalize font-mont text-center p-2">
        Skills, languages and Framweworks
      </h2>
      <SimpleGrid
        gap="20px"
        minChildWidth="300px"
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        background="inherit"
      >
        <Card>
          <CardHeader mt="5px">
            <h3 className="tracking-widest font-Dancing">Languages</h3>
            <p className="capitalize">programming languages</p>
          </CardHeader>
          <CardBody mt="4px">
            <UnorderedList>
              {Languages.map((item, index) => {
                return (
                  <ListItem className="capitalize" key={index}>
                    {item.name}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <p>Ratings coming up</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="tracking-widest font-Dancing">Framworks</h3>
            <p className="capitalize">mastery in frameworks</p>
          </CardHeader>
          <CardBody mt="4px">
            <UnorderedList>
              {Frameworks.map((item, index) => {
                return <ListItem>{item.name}</ListItem>;
              })}
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <p>Ratings coming up</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="tracking-widest font-Dancing">Skills</h3>
            <p className="capitalize">stacks</p>
          </CardHeader>
          <CardBody className="grid grid-cols-2 gap-2">
            <h5>Front-end</h5>
            <UnorderedList>
              {FrontEnd.map((item, index) => {
                return <ListItem>{item}</ListItem>;
              })}
            </UnorderedList>

            <h5>Backend</h5>
            <UnorderedList>
              {Backend.map((item, index) => {
                return <ListItem>{item}</ListItem>;
              })}
            </UnorderedList>
            <h5>Mobile</h5>
            <UnorderedList>
              {mobile.map((item, index) => {
                return <ListItem>{item}</ListItem>;
              })}
            </UnorderedList>
          </CardBody>
          <CardFooter>
            <h5>MERN</h5>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default Skills;

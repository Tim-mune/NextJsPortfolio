import { CardHeader, Card, CardBody, CardFooter } from "@chakra-ui/card";
import { SimpleGrid, Box, Spacer, List, ListItem } from "@chakra-ui/layout";
import { Languages } from "@/utils/Languages";
const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen mt-10 flex flex-col justify-center"
    >
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
          <CardBody>
            <List>
              {Languages.map((item, index) => {
                return (
                  <ListItem className="capitalize" key={index}>
                    {item.name}
                  </ListItem>
                );
              })}
            </List>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="tracking-widest font-Dancing">Framworks</h3>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="tracking-widest font-Dancing">Skills</h3>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter></CardFooter>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default Skills;

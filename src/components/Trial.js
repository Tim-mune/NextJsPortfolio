import { SimpleGrid, Box } from "@chakra-ui/layout";
const Trial = () => {
  return (
    <div>
      <h3 className="xs:flex xs:gap-4 ss:flex ss:gap-5 sm:flex sm:gap-6 md:flex md:gap-10 lg:flex lg:gap-12 xl:flex xl:gap-14"></h3>
      <SimpleGrid
        bg="gray.50"
        columns={{ sm: 2, md: 4, lg: 6 }}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        <Box boxShadow="xs" p="6" rounded="md" bg="white">
          xs
        </Box>
        <Box boxShadow="sm" p="6" rounded="md" bg="white">
          sm
        </Box>
        <Box boxShadow="base" p="6" rounded="md" bg="white">
          Base
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          md
        </Box>
        <Box boxShadow="lg" p="6" rounded="md" bg="white">
          lg
        </Box>
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          xl
        </Box>
        <Box boxShadow="2xl" p="6" rounded="md" bg="white">
          2xl
        </Box>
        <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
          Dark lg
        </Box>
        <Box boxShadow="outline" p="6" rounded="md" bg="white">
          Outline
        </Box>
        <Box boxShadow="inner" p="6" rounded="md" bg="white">
          Inner
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Trial;

import { Container, Text, VStack, Box, Heading, Flex, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Vision</Heading>
          <Text mt={4}>
            Our vision for the new SimpleSoft website is to create a clear and engaging digital presence that effectively communicates our message to potential customers: we are experts in delivering customized business software solutions that streamline processes and drive efficiency. The website should emphasize our strong points, including our ability to rapidly initiate new projects, our expertise in process automation and AI implementations, and our commitment to transparency and individual approach throughout the development lifecycle. By showcasing our completed projects and highlighting our comprehensive service offerings, we aim to assure potential clients of our capability to turn their ideas into fully realized, automated solutions.
          </Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Software Development Process</Heading>
          <Text mt={4}>
            At SimpleSoft, we pride ourselves on delivering top-notch, custom software solutions through a well-defined and efficient development process. Here’s a detailed look at how we create bespoke software tailored to meet our clients' unique needs:
          </Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Transparency</Heading>
          <VStack align="start" mt={4} spacing={3}>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Short Feedback Loop: We ensure that our clients are always in the loop with frequent updates and reviews. This allows us to make quick adjustments based on client feedback.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Tasks and Agile Approach: Our agile methodology breaks down the project into manageable tasks and sprints, promoting continuous progress and adaptability.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Transparent Progress Tracking: Clients have access to real-time progress tracking through our project management tools, ensuring complete visibility.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Tracking and Reports: Regular reports and meetings help clients stay informed about the project's status and any upcoming milestones.</Text>
            </Flex>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Automation</Heading>
          <VStack align="start" mt={4} spacing={3}>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Automated Development and Deployment: Our development process is highly automated, from code integration to deployment, minimizing errors and speeding up delivery.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Test Servers and Continuous Integration: Automated testing on dedicated servers ensures that any issues are caught early, maintaining high quality.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Notifications: Clients receive automatic notifications about key events, updates, and milestones, keeping them engaged and informed.</Text>
            </Flex>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Individual Approach</Heading>
          <VStack align="start" mt={4} spacing={3}>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Close Cooperation with Customers: We work closely with our clients to understand their specific needs and preferences, ensuring that the final product is a perfect fit.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Custom Websites and Functionalities: Each project is uniquely tailored, with custom features and designs that align with the client’s vision and business goals.</Text>
            </Flex>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Base Codebase</Heading>
          <Text mt={4}>
            Extensive Codebase: We leverage our extensive library of pre-developed code, which is both extensible and customizable, to accelerate development while maintaining flexibility for custom solutions.
          </Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">New Product Development Process</Heading>
          <VStack align="start" mt={4} spacing={3}>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Initial Idea: The process begins with brainstorming sessions to conceptualize the initial idea, setting the foundation for the project.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Requirements Gathering: Detailed discussions with the client to gather all necessary requirements and understand the project’s scope and objectives.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Defining the Scope of Work: We outline a clear scope of work, detailing the deliverables, timelines, and responsibilities, ensuring all parties have a shared understanding.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Cost Estimation: Transparent and accurate cost estimation helps clients understand the investment required, with no hidden surprises.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Implementation: The development phase where our skilled team brings the project to life using our automated and agile methods, ensuring high quality and efficiency.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Deployment: The completed software is deployed, thoroughly tested, and optimized for performance in its real-world environment.</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCheckCircle} color="green.500" />
              <Text ml={2}>Hosting: We offer reliable hosting services, ensuring the software runs smoothly and securely post-deployment.</Text>
            </Flex>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
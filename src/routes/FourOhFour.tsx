import { Center, Group, Text, ThemeIcon, Title } from "@mantine/core";
import { FaceIdError } from "tabler-icons-react";

const FourOhFour = () => (
  <>
    <Center>
      <ThemeIcon color="red" variant="light" size={64} radius="md">
        <FaceIdError size={128} />
      </ThemeIcon>
    </Center>
    <Title order={1} align="center" mt="md">
      404
    </Title>
    <Title order={2} align="center">
      Page not found.
    </Title>
    <Text align="center" mt="md">
      Use the navbar above to get to where you wanted to go.
    </Text>
  </>
);

export default FourOhFour;

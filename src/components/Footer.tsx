import { Affix, Center, Container, Text } from "@mantine/core";

const Footer = () => (
  <Affix position={{ bottom: 5, right: "50%" }}>
    <Text
      color="gray"
      size="xs"
      align="center"
      className="translate-x-1/2"
      inline
    >
      The r/Apple Discord is in no way affiliated with Apple Inc.
    </Text>
  </Affix>
);

export default Footer;

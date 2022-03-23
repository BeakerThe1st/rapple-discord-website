import { Affix, Center, Container, Text } from "@mantine/core";

const Footer = () => (
  <Affix position={{ bottom: 5 }}>
    <footer className="w-screen">
      <Text color="gray" size="xs" align="center" inline>
        The r/Apple Discord is in no way affiliated with Apple Inc.
      </Text>
    </footer>
  </Affix>
);

export default Footer;

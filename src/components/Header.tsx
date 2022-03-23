import {
  Header as MantineHeader,
  Container,
  Space,
  Text,
  Button,
} from "@mantine/core";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = (props: Omit<LinkProps, "type">) => {
  const resolved = useResolvedPath(props.to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Button
      compact
      type="button"
      variant={match ? "light" : "subtle"}
      component={Link}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const Header = () => (
  <MantineHeader height={60}>
    <Container className="flex items-center justify-between h-full">
      <Text size="xl" weight={600}>
        r/Apple Discord
      </Text>
      <div className="flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/appeals">Appeals</NavLink>
      </div>
    </Container>
  </MantineHeader>
);

export default Header;

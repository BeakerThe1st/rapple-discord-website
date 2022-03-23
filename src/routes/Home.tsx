import { Button, Image, Text, Title } from "@mantine/core";
import { useContext } from "react";
import GuildInfoContext from "../context/GuildInfoContext";
import { BrandDiscord } from "tabler-icons-react";

const Home = () => {
  const guildInfo = useContext(GuildInfoContext)!;

  return (
    <div className="flex flex-col">
      <Image
        radius="md"
        src={guildInfo.bannerURL}
        alt="r/Apple Discord Banner"
        width="50%"
        classNames={{
          image: "mx-auto shadow",
        }}
      />
      <Image
        width="12.5%"
        src={guildInfo.iconURL}
        alt="r/Apple Discord Icon"
        withPlaceholder
        className="-translate-y-1/2"
        classNames={{
          image: "rounded-full mx-auto shadow-lg",
        }}
      />
      <div className="text-center -mt-12">
        <Title order={1}>r/Apple Discord</Title>
        <Text size="lg">{guildInfo.members.toLocaleString()} members</Text>
      </div>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.gg/apple"
        variant="gradient"
        className="mx-auto mt-6"
        leftIcon={<BrandDiscord size={18} />}
        size="lg"
        gradient={{ from: "indigo", to: "cyan" }}
      >
        Join Server
      </Button>
    </div>
  );
};

export default Home;

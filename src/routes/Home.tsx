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
        className="max-w-[800px] m-auto"
        src={guildInfo.bannerURL}
        alt="r/Apple Discord Banner"
        classNames={{
          image: "mx-auto shadow",
        }}
      />
      <Image
        src={guildInfo.iconURL}
        alt="r/Apple Discord Icon"
        withPlaceholder
        className="-translate-y-1/2 max-w-[30%] m-auto"
        classNames={{
          image: "rounded-full mx-auto shadow-lg",
        }}
      />
      <div className="text-center -mt-10">
        <Title order={1}>r/Apple Discord</Title>
        <Text size="lg">{guildInfo.members.toLocaleString()} members</Text>
        <Button
          mt="lg"
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://discord.gg/apple"
          variant="gradient"
          className="mx-auto"
          leftIcon={<BrandDiscord size={18} />}
          size="lg"
          gradient={{ from: "indigo", to: "cyan" }}
        >
          Join Server
        </Button>
      </div>
    </div>
  );
};

export default Home;

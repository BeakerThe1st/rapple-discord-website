import { useState, useEffect } from "react";
import {
  AppShell as MantineAppShell,
  Center,
  Container,
  Loader,
} from "@mantine/core";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import GuildInfoContext, { GuildInfo } from "../context/GuildInfoContext";
import Header from "./Header";
import Footer from "./Footer";

const AppShell = () => {
  return (
    <MantineAppShell header={<Header />}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>r/Apple Discord Website</title>
        <link rel="canonical" href="https://rapple.xyz/" />
      </Helmet>
      <OutletWithContext />
    </MantineAppShell>
  );
};

const OutletWithContext = () => {
  const [guildInfo, setGuildInfo] = useState<GuildInfo | null>(null);
  useEffect(() => {
    if (guildInfo) {
      return;
    }
    fetch("https://bonjour-discord-bot.herokuapp.com/guild-info")
      .then((res) => res.json())
      .then(setGuildInfo);
  }, []);
  if (!guildInfo) {
    return (
      <Center>
        <Loader size="xl" variant="dots" />
      </Center>
    );
  }
  return (
    <GuildInfoContext.Provider value={guildInfo}>
      <Outlet />
      <Footer />
    </GuildInfoContext.Provider>
  );
};

export default AppShell;

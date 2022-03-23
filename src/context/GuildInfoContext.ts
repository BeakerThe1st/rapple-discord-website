interface GuildInfo {
  iconURL: string;
  members: number;
  bannerURL: string;
}

import { createContext } from "react";

const GuildInfoContext = createContext<GuildInfo | null>(null);

export type { GuildInfo };
export default GuildInfoContext;

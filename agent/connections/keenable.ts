import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.keenable.ai",
  description: "Search the web and fetch pages as clean markdown.",
  auth: connect("api.keenable.ai/prj_29klCtW1MPEzDYlE5mFawf3ZmPMw"),
});

import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.similarweb.com",
  description: "Analyze web, mobile app, and market performance.",
  auth: connect("mcp.similarweb.com/prj_29klCtW1MPEzDYlE5mFawf3ZmPMw"),
});

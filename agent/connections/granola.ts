import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.granola.ai/mcp",
  description: "Search meeting notes and summaries.",
  auth: connect("mcp.granola.ai/prj_29klCtW1MPEzDYlE5mFawf3ZmPMw"),
});

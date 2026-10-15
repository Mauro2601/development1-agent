import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.createprints.ai/mcp",
  description: "Create and order physical wall art with AI.",
  auth: connect("mcp.createprints.ai/prj_29klCtW1MPEzDYlE5mFawf3ZmPMw"),
});

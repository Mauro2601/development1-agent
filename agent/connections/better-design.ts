import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://better-design.com/api/mcp",
  description: "Give coding agents design systems, UI principles, icons, and UI review.",
  auth: connect("better-design.com/prj_29klCtW1MPEzDYlE5mFawf3ZmPMw"),
});

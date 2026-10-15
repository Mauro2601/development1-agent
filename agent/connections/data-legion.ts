import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://api.datalegion.ai",
  description: "Enrich and search B2B person and company data.",
  auth: connect("api.datalegion.ai/prj_29klCtW1MPEzDYlE5mFawf3ZmPMw"),
});

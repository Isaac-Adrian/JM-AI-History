import "@knight-lab/timelinejs/dist/css/timeline.css";
import "./style.css";

import * as TL from "@knight-lab/timelinejs";
import timelineData from "./timelineData.js";

new TL.Timeline(document.querySelector("#app"), timelineData);

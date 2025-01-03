import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import LiveEditor from "./pages/LiveEditor"; // Adjust the path as necessary

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <LiveblocksProvider publicApiKey={"pk_dev_iO9H1BMvb4YW7pwdjWfWte7umr7oCC64Mw7l2xMe33wv4BiywvrctLm9OqCsfXfE"}>
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <BrowserRouter>
            <LiveEditor />
          </BrowserRouter>
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  </StrictMode>
);

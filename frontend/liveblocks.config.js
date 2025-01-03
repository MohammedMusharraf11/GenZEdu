import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

// Initialize Liveblocks client
const client = createClient({
  publicApiKey: "pk_dev_iO9H1BMvb4YW7pwdjWfWte7umr7oCC64Mw7l2xMe33wv4BiywvrctLm9OqCsfXfE",
});

// Create room context from Liveblocks
export const {
  RoomProvider,
  useOthers,
  useSelf,
  useBroadcastEvent,
  useEventListener,
  useStorage,
  useMutation,
} = createRoomContext(client);

// Add documentation for custom types and usage
/**
 * Liveblocks Configuration
 * 
 * Presence: Real-time user data like cursor positions.
 * Example:
 * {
 *   cursor: { x: number, y: number }
 * }
 * 
 * Storage: The shared state for the whiteboard.
 * Here, we're using a string to store the canvas data (JSON) for the whiteboard.
 * Example:
 * {
 *   whiteboardData: string // Canvas data serialized as a JSON string
 * }
 * 
 * UserMeta: Information about authenticated users.
 * Example:
 * {
 *   id: string,
 *   info: { name: string, avatar: string }
 * }
 * 
 * RoomEvent: Custom events for broadcasting and listening.
 * Example:
 * { type: "PLAY" }
 */

export {};

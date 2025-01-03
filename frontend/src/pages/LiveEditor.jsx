import React, { useRef, useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { useStorage, useMutation } from "../../liveblocks.config";

function LiveEditor() {
  const canvasRef = useRef(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Access shared storage for the whiteboard
  const whiteboardData = useStorage((root) => root.whiteboardData);

  // Mutation to update the shared whiteboard data
  const updateWhiteboard = useMutation(
    ({ storage }, newData) => {
      storage.set("whiteboardData", newData);
    },
    []
  );

  // Sync canvas when whiteboardData changes
  useEffect(() => {
    if (whiteboardData && canvasRef.current) {
      if (isFirstLoad) {
        // Only load data for the first time (avoid blinking on updates)
        canvasRef.current.loadSaveData(whiteboardData, false);
        setIsFirstLoad(false); // Set to false after first load
      } else {
        // Only update the canvas when data changes, to avoid blinking
        canvasRef.current.loadSaveData(whiteboardData, true);
      }
    }
  }, [whiteboardData, isFirstLoad]);

  // Save data to shared storage whenever the user draws
  const handleSave = () => {
    if (canvasRef.current) {
      // Get the current canvas data as JSON
      const data = canvasRef.current.getSaveData();
      // Update shared storage with the new drawing data
      updateWhiteboard(data);
    }
  };

  return (
    <div>
      <h1>Collaborative Whiteboard</h1>
      <CanvasDraw
        ref={canvasRef}
        onChange={handleSave} // Save data whenever drawing changes
        brushColor="#000"
        canvasWidth={800}
        canvasHeight={600}
      />
    </div>
  );
}

export default LiveEditor;

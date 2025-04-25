import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CubeShow.css";
import CuteChar from "./CuteChar";

const CubeShow = () => {

  let [isExpand, setIsExpand] = useState(false);

  let handleExpantion = () => {
    setIsExpand((currValue) => {
      isExpand = !currValue;
      return isExpand;
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <p>Click on the Image</p>

      <div className="scene">
        <div className={isExpand ? "expand cube" : "cube"}  onClick={handleExpantion}>
          {/* Main Cube Faces */}
          <div className="face front"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
          <div className="face back"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
          <div className="face right"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
          <div className="face left"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
          <div className="face top"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
          <div className="face bottom"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>

          {/* Edge Frames (Extracting on Hover) */}
          <div className="edges">
            <div className="edge edge-front"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
            <div className="edge edge-back"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
            <div className="edge edge-right"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
            <div className="edge edge-left"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
            <div className="edge edge-top"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
            <div className="edge edge-bottom"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg" /></div>
          </div>
        </div>
      </div>
      <br></br>
      {/* <button onClick={() => navigate("/video")} className="next-slide">Next</button> */}
    </>
  );
};

export default CubeShow;

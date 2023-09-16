import { Fragment } from "react";
import "./OffCanvas.css";
const OffCanvas = (props) => {
  return (
    <Fragment>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="offcanvas">
        <div className="content">{props.children}</div>
      </div>
    </Fragment>
  );
};
export default OffCanvas;

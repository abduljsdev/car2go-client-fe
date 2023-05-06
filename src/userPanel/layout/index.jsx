import "./sidebar.css";
import Sidebar from "./sidebar";
import PanelRouting from "../../panelRouting";

function PanelLayout() {
  return (
    <div className="w-100 d-flex">
      <div className="side-bar-section">
        <Sidebar />
      </div>
      <div className="PanelLayout-content h-100 border-secondary-2 rounded-3">
        <PanelRouting />
      </div>
    </div>
  );
}

export default PanelLayout;

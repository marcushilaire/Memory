import React from "react";
import "./Header.css";

const Header = (params) => (
<div>
<footer >
<div id="header" className="row footer-row" align="center">
  <div className="col">
    <div className="col-sm-4">
    Memory Game
    </div>
  </div>
  <div className="col">
    <div className="col-sm-4" >
    Score: {params.score}
    </div>
  </div>
  <div className="col">
    <div className="col-sm-4">
   Best Score: {params.bestScore}
    </div>
  </div>
</div>
</footer>
</div>
);

export default Header;

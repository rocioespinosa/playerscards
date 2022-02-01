import "./styles.css";
import React from "react";

export default function Footer() {
  return (
    <div class="footer-social">
      <a href="https://github.com/rocioespinosa" target="" className="social">
        <span className="socialTxt">Coded By Rocío Espinosa</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
          alt="my Github"
          className="socialImg"
        />
      </a>
    </div>
  );
}

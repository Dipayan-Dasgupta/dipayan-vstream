import React, { Component } from "react";
import { LinkedinOutlined } from "@ant-design/icons";
import "./footer.css";

class footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p>&copy; Dipayan Dasgupta | 2022</p>
        <p>A clone of video streaming platfrom</p>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/dipayan20/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="social-item">
              <LinkedinOutlined />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default footer;

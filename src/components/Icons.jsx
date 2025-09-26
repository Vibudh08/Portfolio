import React from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./Icons.css";

const Icons = () => {
  return (
    <div className="icons">
      <a
        href="https://github.com/Vibudh08"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GithubOutlined className="icn" />
      </a>

      <a
        href="https://www.linkedin.com/in/vibudh08"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinOutlined className="icn" />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=vibudhrathore8@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <MailOutlined className="icn" />
      </a>
    </div>
  );
};

export default Icons;

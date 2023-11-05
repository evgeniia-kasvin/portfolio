import React from "react";
import "./Contacts.css";
function Contacts() {
  return (
    <div className="contacts" id="contacts">
      <ul className="contacts-list">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100094371816689&mibextid=ZbWKwL">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-facebook"></span>
          </a>
        </li>
        <li>
          <a href="https://t.me/webdwarf">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/prozhzhenie/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-instagram"></span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/webdwarf/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-linkedin"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;

import myImage from "../assets/150.jpg";
import { FaCamera } from "react-icons/fa";

export default function AccountEdit({ input }) {
  return (
    <div className="subPages-container">
      <h2 className="settings-title">Account Settings</h2>

      <div className="profile-section">
        <div className="avatar-wrapper">
          <img src={myImage} alt="profile" className="avatar-img" />
          <button className="camera-btn">
            <FaCamera size={12} color="#fff" />
          </button>
        </div>
        <div className="profile-info">
          <p className="profile-name">{input.fullName}</p>
          <p className="profile-email">{input.email}</p>
        </div>
      </div>

      <p className="settings-desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr className="divider" />
    </div>
  );
}

import React from "react";
import {
  IonImg,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { menuOutline, personCircleOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerTable1">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="app-title">CareCover</IonTitle>
          <IonButton slot="end" id="main-content">
            <IonIcon icon={menuOutline} className="icon" />
          </IonButton>
          <IonButton slot="end">
            <IonIcon icon={personCircleOutline} className="icon" />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonImg src="" alt="" className="headingAcceuilImage" />
      <div className="headeroverlay">
        <h1>CareCover</h1>

        <p className="headeroverlayParagraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="contact">
          <Link to="/contact">Contactez Nous</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

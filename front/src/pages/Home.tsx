import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import BasePage from "../components/BasePage";
import { menuOutline, personCircleOutline } from "ionicons/icons";

const Home: React.FC = () => {
  const header = (
    <IonHeader mode="md" id="">
      <IonToolbar>
        <div>
          <h1>CareCover</h1>
        </div>
        <IonButton slot="end" fill="clear">
          <IonIcon icon={personCircleOutline} />
        </IonButton>
        <IonButton slot="end" fill="clear">
          <IonMenuButton autoHide={false}>
            <IonIcon icon={menuOutline} />
          </IonMenuButton>
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );

  return (
    <BasePage header={header}>
      <h1>Content</h1>
    </BasePage>
  );
};

export default Home;

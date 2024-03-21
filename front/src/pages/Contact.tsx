import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonMenuButton,
} from "@ionic/react";
import { menuOutline, personCircleOutline } from "ionicons/icons";
import BasePage from "../components/BasePage";

const Contact: React.FC = () => {
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
      <IonContent>
        <h1>Content</h1>
      </IonContent>
    </BasePage>
  );
};

export default Contact;

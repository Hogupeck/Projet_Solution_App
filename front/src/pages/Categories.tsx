// Categories.tsx
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
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { menuOutline, personCircleOutline } from "ionicons/icons";
import BasePage from "../components/BasePage";
import Card from "../components/Card/Card"; 
import "./Categories.css";

const Categories: React.FC = () => {
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
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <Card
                image="URL_IMAGE"
                title="Titre 1"
                content="content 1"
              />
            </IonCol>
            <IonCol size="6">
              <Card
                image="URL_IMAGE"
                title="Titre 2"
                content="content 2"
              />
            </IonCol>
            <IonCol size="6">
              <Card
                image="URL_IMAGE"
                title="Titre 3"
                content="content 3"
              />
            </IonCol>
            <IonCol size="6">
              <Card
                image="URL_IMAGE"
                title="Titre 4"
                content="content 4"
              />
            </IonCol>
            <IonCol size="6">
              <Card
                image="URL_IMAGE"
                title="Titre 5"
                content="content 5"
              />
            </IonCol>
            <IonCol size="6">
              <Card
                image="URL_IMAGE"
                title="Titre 6"
                content="content 6"
              />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonButton className="see-more-button" expand="full" color="green">
          Voir plus
        </IonButton>
      </IonContent>
    </BasePage>
  );
};

export default Categories;

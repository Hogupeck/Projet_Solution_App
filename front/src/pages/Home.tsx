import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>hdhdhd</IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Content</h1>
      </IonContent>
    </IonPage>
  );
};

export default Home;


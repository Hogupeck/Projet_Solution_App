
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonIcon, IonButton } from '@ionic/react';
import { menuOutline, personCircleOutline } from 'ionicons/icons';
import './Header.css';

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle className="app-title">CareCover</IonTitle>
        <IonButton slot="end">
          <IonIcon icon={menuOutline} className="icon" />
        </IonButton>
        <IonButton slot="end">
          <IonIcon icon={personCircleOutline} className="icon" />
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;


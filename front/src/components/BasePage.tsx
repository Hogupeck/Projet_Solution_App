import { IonContent, IonPage } from "@ionic/react";
import React from "react";

function BasePage({ scrollY = true, header = null, children }: any) {
  const HeaderComponent = header ?? <React.Fragment />;
  return (
    <IonPage id="main-content">
      {HeaderComponent}
      <IonContent scrollY={scrollY} fullscreen>
        {children}
      </IonContent>
    </IonPage>
  );
}

export default BasePage;

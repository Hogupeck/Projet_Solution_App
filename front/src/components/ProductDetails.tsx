import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { heartOutline, heartSharp, cartOutline, cartSharp } from 'ionicons/icons';

const ProductDetails: React.FC = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Détails du Produit</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Affichage des détails du produit */}
        <div>
          <h2>Nom du Produit</h2>
          <p>Description du Produit</p>
          <p>Prix: $XX.XX</p>
        </div>

        {/* Boutons d'action */}
        <div>
          <IonButton color="secondary" onClick={handleToggleFavorite}>
            <IonIcon icon={isFavorited ? heartSharp : heartOutline} />
            {isFavorited ? 'Retirer des Favoris' : 'Ajouter aux Favoris'}
          </IonButton>
          <IonButton color="primary" onClick={handleAddToCart} disabled={isAddedToCart}>
            <IonIcon icon={isAddedToCart ? cartSharp : cartOutline} />
            {isAddedToCart ? 'Ajouté au Panier' : 'Ajouter au Panier'}
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ProductDetails;

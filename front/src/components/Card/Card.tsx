import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg } from '@ionic/react';
import { Button, Card as BootstrapCard } from 'react-bootstrap';
import './Card.css';

interface CardProps {
  image: string;
  title: string;
  content: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, content, onClick }) => {
  return (
    <div>
      <IonCard onClick={onClick}>
        <IonImg src={image} />
        <IonCardHeader>
          <IonCardTitle style={{ fontSize: '0.9rem' }}>{title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{content}</IonCardContent>
       
      </IonCard>

     
    </div>
  );
}

export default Card;

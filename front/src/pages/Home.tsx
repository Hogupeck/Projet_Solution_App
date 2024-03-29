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
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

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
      <IonContent>
       

       
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=First+slide"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Second+slide"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Third+slide"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="categories">
      <h2>Categories</h2>
      <Row xs={3} md={4} className="g-4">
        <Col>
          <div className="category-item">
            <Image src="https://via.placeholder.com/80x80" roundedCircle />
            <p>Category 1</p>
          </div>
        </Col>
        <Col>
          <div className="category-item">
            <Image src="https://via.placeholder.com/80x80" roundedCircle />
            <p>Category 2</p>
          </div>
        </Col>
        <Col>
          <div className="category-item">
            <Image src="https://via.placeholder.com/80x80" roundedCircle />
            <p>Category 3</p>
          </div>
        </Col>
        <Col>
          <div className="category-item">
            <Image src="https://via.placeholder.com/80x80" roundedCircle />
            <p>Category 4</p>
          </div>
        </Col>
        <Col>
          <div className="category-item">
            <Image src="https://via.placeholder.com/80x80" roundedCircle />
            <p>Category 5</p>
          </div>
        </Col>
        
      </Row>
    </div>

      </IonContent>
    </BasePage>
  );
};

export default Home;

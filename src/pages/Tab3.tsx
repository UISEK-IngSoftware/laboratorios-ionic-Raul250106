import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='card-container'>
          <IonCard className='card'>
            <img src="https://avatars.githubusercontent.com/u/216421919?v=4" />
            <IonCardHeader>
              <IonCardTitle>Raúl Alejandro Luna Vizcaíno</IonCardTitle>
              <IonCardSubtitle>raul.luna@uisek.edu.ec</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>Este es el perfil de Raul Luna, desarrollador web y de aplicaciones móviles</IonCardContent>
          </IonCard>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;

import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Agregar repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          <IonInput
            className='form-field'
            label="Nombre"
            labelPlacement="floating"
            fill="outline"
            placeholder="nombre-repositorio"
          ></IonInput>
          <IonTextarea
            className='form-field'
            label="Descripción"
            labelPlacement="floating"
            fill="outline"
            placeholder="descripcion-repositorio"
            rows = {6}
            autoGrow
          ></IonTextarea>
          <IonButton className='form-field' expand='block' fill='solid'>
            Crear repositorio
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;

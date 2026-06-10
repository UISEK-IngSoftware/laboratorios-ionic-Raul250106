import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';
import { fecthRepositories } from '../services/GithubService';
import { Repository } from '../interfaces/Repository';
import React from 'react';
import LoadingSpinner from '../components/loadingSpinner';

const Tab1: React.FC = () => {

  const [repos, setRepos] = React.useState <Repository[]>([]);
  const [loading, setLoading] = React.useState <boolean>(false);
  
  const loadRepos = async () => {
    const reposData = await fecthRepositories();
    setRepos (reposData);
    setLoading (false);
  }

  useIonViewWillEnter (() => {
    loadRepos();
  })



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {repos.map(repo => (
            <RepoItem key={repo.id} {...repo}/>
          ))}
        </IonList>
        {loading && <LoadingSpinner isOpen = {loading} />}
        {!loading && repos.length === 0 && (
          <div>
            <p>No hay repositorios encontrados.</p>
          </div>
        )}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;

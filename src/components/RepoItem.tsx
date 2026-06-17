import './RepoItem.css';
import React from 'react';
import {createOutline, trashBinOutline, starOutline } from 'ionicons/icons'
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail} from '@ionic/react';
import { Repository } from '../interfaces/Repository';

const RepoItem: React.FC<Repository> = ( repo ) => {
    return (
        <IonItemSliding>
            <IonItem>
                <IonThumbnail slot="start">
                    <img src={repo.owner.avatar_url}/>
                </IonThumbnail>
                <IonLabel>
                    <h1>{repo.name}</h1>
                    {repo.description && <p><strong> Description: </strong> {repo.description} </p>}
                    {repo.language && (<p><strong> Language: </strong> {repo.language} </p>)}
                </IonLabel>
            </IonItem>
            <IonItemOptions>
                <IonItemOption className='opciones'>
                    <IonIcon className='crear' icon={createOutline} slot='icon-only' />
                </IonItemOption>
                <IonItemOption className='opciones'>
                    <IonIcon className='borrar' icon={trashBinOutline} slot='icon-only' />
                </IonItemOption>
                <IonItemOption className='opciones'>
                    <IonIcon className='favorito' icon={starOutline} slot='icon-only' />
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
};

export default RepoItem;
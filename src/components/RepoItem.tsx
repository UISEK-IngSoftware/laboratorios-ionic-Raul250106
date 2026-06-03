import './RepoItem.css';
import React from 'react';
import {createOutline, trashBinOutline, starOutline } from 'ionicons/icons'
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail} from '@ionic/react';

interface RepoProps {
    name: string;
    avatarUrl: string;
}

const RepoItem: React.FC<RepoProps> = ({ name, avatarUrl }) => {
    return (
        <IonItemSliding>
            <IonItem>
                <IonThumbnail slot="start">
                    <img src={avatarUrl}/>
                </IonThumbnail>
                <IonLabel>
                    <h1>{name}</h1>
                    <p>Descripcion: Hola como vas</p>
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
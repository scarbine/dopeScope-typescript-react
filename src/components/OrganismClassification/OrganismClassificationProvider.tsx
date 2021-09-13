import React, { createContext, useState } from 'react'
import { OrganismClassification } from './iOrganismClassification';
import { OrganismClassificationData } from './OrganismClassificationData';

export const OrganismContext = createContext<OrganismClassification[] | null | undefined>(null);

export const OrganismClassificationProvider = (props: any) =>{

    
    const [ocClassData, setOcClassData] = useState<OrganismClassification[] | null | undefined >();
    
    
    setOcClassData(OrganismClassificationData);


    return (
        <OrganismContext.Provider value={{ocClassData, setOcClassData}} >
            {props.children}
        </OrganismContext.Provider>
    )

}
import { useState } from "react";

export default function AddHours() {
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');


    const calculateHours = () => {
        if (!dateDebut || !dateFin ) return 0;
        const debut = new Date(dateDebut);
        const fin = new Date(dateFin);
        const diffMs = fin.getTime() - debut.getTime();
        const diffHrs = diffMs / (1000 * 60 * 60);
        if (diffHrs < 0) return -1;
        return diffHrs;
    }
    return (
    <>
        <div>AddHours Component</div>
        <div>
            <label > Début : </label>
            <input type="datetime-local" 
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
            />
        </div>
        <div>
            <label > Début : </label>
            <input type="datetime-local" 
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
            />
        </div>
        <div>{dateDebut}</div>
        <div>{dateFin}</div>
         {calculateHours() === -1 &&
         <div className="text-red-500">La date de fin doit être après la date de début</div> || 
         calculateHours() === 0 &&
         <div className="text-red-500">Les date de début et de fin doivents être sélectionné</div> ||
         <div>Heure travaillé : {calculateHours()}</div>
         }
        
    </>
    );
}

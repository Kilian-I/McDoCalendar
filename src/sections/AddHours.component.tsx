//src/components/AddHours.components.tsx
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";


export default function AddHours() {
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const queryClient = useQueryClient();

    const calculateHours = () => {
        if (!dateDebut || !dateFin) return 0;
        const debut = new Date(dateDebut);
        const fin = new Date(dateFin);
        const diffMs = fin.getTime() - debut.getTime();
        const diffHrs = diffMs / (1000 * 60 * 60);
        if (diffHrs < 0) return -1;
        return diffHrs;
    }
    const handleSave = () => {
        const hours = calculateHours();
        queryClient.setQueryData(['workHours'], {
            total: hours,
            dateDebut: dateDebut,
            dateFin: dateFin
        });
    }

    const handleClick = () => {
        const maintenant = new Date();
        const annee = maintenant.getFullYear();
        const mois = maintenant.getMonth();
        const nombreDeJours = new Date(annee, mois + 1, 0).getDate();
        console.log(`Ce mois contient ${nombreDeJours} jours.`);
    };

    return (
        <>
            <div className="max-w-md p-6 mx-auto bg-white border border-gray-200 rounded-xl shadow-sm space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                    Saisie des heures
                </h2>

                <div className="grid grid-cols-1 gap-4">
                    {/* Champ Début */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="debut" className="text-sm font-medium text-gray-700">
                            Début
                        </label>
                        <input
                            id="debut"
                            type="datetime-local"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            value={dateDebut}
                            onChange={(e) => setDateDebut(e.target.value)}
                        />
                    </div>

                    {/* Champ Fin */}
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="fin" className="text-sm font-medium text-gray-700">
                            Fin
                        </label>
                        <input
                            id="fin"
                            type="datetime-local"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            value={dateFin}
                            onChange={(e) => setDateFin(e.target.value)}
                        />
                    </div>
                </div>

                {/* Zone de Résultat / Alertes */}
                <div className="pt-4 mt-4 border-t">
                    {calculateHours() === 0 ? (
                        <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
                            ⚠️ Veuillez sélectionner les deux dates.
                        </p>
                    ) : calculateHours() === -1 ? (
                        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
                            ❌ La date de fin doit être après la date de début.
                        </p>
                    ) : (
                        <>
                            <div className="">
                                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <span className="text-blue-800 font-medium">Heures travaillées :</span>
                                    <span className="text-2xl font-bold text-blue-700">{calculateHours()}h</span>
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button onClick={handleSave} className="px-4 py-2 bg-blue-600 object-center text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Enregistrer
                                    </button>
                                </div>
                            </div>

                        </>
                    )}
                    <button
                        onClick={handleClick}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            backgroundColor: '#61dafb',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Cliquez-moi
                    </button>
                </div>
            </div>

        </>
    );
}

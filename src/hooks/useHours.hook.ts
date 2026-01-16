export const useHours = () => {
    const calculateHours = (dateDebut: string, dateFin: string) => {
        if (!dateDebut || !dateFin) return 0;
        const debut = new Date(dateDebut);
        const fin = new Date(dateFin);
        const diffMs = fin.getTime() - debut.getTime();
        const diffHrs = diffMs / (1000 * 60 * 60);
        if (diffHrs < 0) return -1;
        return diffHrs;
    }
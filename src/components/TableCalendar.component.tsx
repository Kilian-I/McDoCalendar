//src/components/TableCalendar.component.tsx
const TableCalendrier = () => {
  const maintenant = new Date();
  const annee = maintenant.getFullYear();
  const mois = maintenant.getMonth();
  
  // Nom du mois pour l'affichage
  const nomMois = maintenant.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
  // Calcul du nombre de jours dans le mois
  const nombreDeJours = new Date(annee, mois + 1, 0).getDate();

  // Génération des données du tableau
  const lignes = [];
  for (let jour = 1; jour <= nombreDeJours; jour++) {
    lignes.push({
      date: `${jour.toString().padStart(2, '0')}/${(mois + 1).toString().padStart(2, '0')}/${annee}`,
      debut: "09:00", 
      fin: "17:00",   
      total: "8h",    
      cumule: `${jour * 8}h` // Simulation de cumul
    });
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textTransform: 'capitalize' }}>Tableau de bord : {nomMois}</h2>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Début</th>
            <th style={styles.th}>Fin</th>
            <th style={styles.th}>Total</th>
            <th style={styles.th}>Total Cumulé</th>
          </tr>
        </thead>
        <tbody>
          {lignes.map((ligne, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={styles.td}>{ligne.date}</td>
              <td style={styles.td}>{ligne.debut}</td>
              <td style={styles.td}>{ligne.fin}</td>
              <td style={styles.td}>{ligne.total}</td>
              <td style={styles.td}>{ligne.cumule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Petits styles rapides pour la lisibilité
const styles = {
  th: { padding: '12px', borderBottom: '2px solid #ccc' },
  td: { padding: '10px' }
};

export default TableCalendrier;
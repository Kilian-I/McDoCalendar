// src/components/TableCalendar.component.tsx
import { useEffect, useState } from "react";

type DayRow = {
  key : number;
  day?: number;
};

const TableCalendrier = () => {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [sizeTable, setSizeTable] = useState<DayRow[]>([]);

  // month days
  const getDayByMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Create table by change month
  useEffect(() => {
    const daysInMonth = getDayByMonth(currentMonth);
    const rows: DayRow[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      rows.push({ key : i  });
    }
    console.log(rows)
    setSizeTable(rows);
  }, [currentMonth]);

  // Change month
  const changeMonth = (decalage: number) => {
    setCurrentMonth(prevDate => {
      const nouvelleDate = new Date(prevDate);
      nouvelleDate.setMonth(nouvelleDate.getMonth() + decalage);
      return nouvelleDate;
    });
  };

  // Styles
  const styles = {
    th: { padding: '12px', borderBottom: '2px solid #ccc' },
    td: { padding: '10px' }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div>
        <button onClick={() => changeMonth(-1)}>Précédent</button>
        <span style={{ margin: '0 10px' }}>
          {currentMonth.toLocaleString('fr-FR', {
            month: 'long',
            year: 'numeric'
          })}
        </span>
        <button onClick={() => changeMonth(1)}>Suivant</button>
      </div>

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
          {sizeTable.map((ligne) => (
            <tr key={ligne.day} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={styles.td}>{ligne.day}</td>
              <td style={styles.td}></td>
              <td style={styles.td}></td>
              <td style={styles.td}></td>
              <td style={styles.td}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCalendrier;

// src/components/TableCalendar.component.tsx
import { useEffect, useState } from "react";
import { TRY_MOCK, type WorkPeriod,  } from "../mocks/workedHours";

type DayRow = {
  dateKey: string; 
  displayDate: string; 
  sessions: WorkPeriod[];
};

const TableCalendrier = () => {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [sizeTable, setSizeTable] = useState<DayRow[]>([]);


  const getDayByMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const findSessionsInMock = (dateKey: string): WorkPeriod[] => {
    const dayData = TRY_MOCK.find(item => item[dateKey]);
    return dayData ? dayData[dateKey] : [];
  };

  const calculateTotal = (sessions: WorkPeriod[]) => {
    return sessions.reduce((acc, s) => {
      const [h1, m1] = s.debut.split(':').map(Number);
      const [h2, m2] = s.fin.split(':').map(Number);
      return acc + ((h2 * 60 + m2) - (h1 * 60 + m1)) / 60;
    }, 0);
  };

  useEffect(() => {
    const daysInMonth = getDayByMonth(currentMonth);
    const rows: DayRow[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const year = currentMonth.getFullYear();
      const month = (currentMonth.getMonth() + 1).toString().padStart(2, '0');
      const day = i.toString().padStart(2, '0');
      const dateKey = `${year}-${month}-${day}`;

      rows.push({
        dateKey: dateKey,
        displayDate: `${day}/${month}`,
        sessions: findSessionsInMock(dateKey) 
      });
    }
    setSizeTable(rows);
  }, [currentMonth]);

  const changeMonth = (decalage: number) => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + decalage, 1));
  };

  const styles = {
    th: { padding: '12px', borderBottom: '2px solid #ccc', backgroundColor: '#f2f2f2' },
    td: { padding: '10px', borderBottom: '1px solid #ddd' }
  };

  let cumulativeTotal = 0;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => changeMonth(-1)}>Précédent</button>
        <strong style={{ margin: '0 15px', textTransform: 'capitalize' }}>
          {currentMonth.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
        </strong>
        <button onClick={() => changeMonth(1)}>Suivant</button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Début</th>
            <th style={styles.th}>Fin</th>
            <th style={styles.th}>Total</th>
            <th style={styles.th}>Total Cumulé</th>
          </tr>
        </thead>
        <tbody>
          {sizeTable.map((ligne) => {
            const dayTotal = calculateTotal(ligne.sessions);
            cumulativeTotal += dayTotal;

            return (
              <tr key={ligne.dateKey}>
                <td style={styles.td}>{ligne.displayDate}</td>
                <td style={styles.td}>{ligne.sessions[0]?.debut || "--:--"}</td>
                <td style={styles.td}>{ligne.sessions[ligne.sessions.length - 1]?.fin || "--:--"}</td>
                <td style={styles.td}>{dayTotal > 0 ? `${dayTotal}h` : "-"}</td>
                <td style={styles.td}><strong>{cumulativeTotal > 0 ? `${cumulativeTotal}h` : "-"}</strong></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableCalendrier;
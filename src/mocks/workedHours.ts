export interface WorkSession {
  id: string;
  dateDebut: string;
  dateFin: string;
  total: number;
}

export const MOCK_WORK_HOURS: WorkSession[] = [
  { id: '1', dateDebut: '2025-05-01T08:00', dateFin: '2025-05-01T12:00', total: 4 },
  { id: '2', dateDebut: '2025-05-01T13:00', dateFin: '2025-05-01T16:00', total: 4 },
  { id: '3', dateDebut: '2025-05-02T09:00', dateFin: '2025-05-02T17:00', total: 8 },
  { id: '4', dateDebut: '2025-05-03T14:00', dateFin: '2025-05-03T18:00', total: 4 },
];
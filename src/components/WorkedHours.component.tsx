// //src/components/WorkedHours.component.tsx
// import { MOCK_WORK_HOURS } from "../mocks/workedHours";


// export default function WorkedHours() {
//   // TODO on remplacera MOCK_WORK_HOURS par un useQuery() de TanStack
//   const data = MOCK_WORK_HOURS;

//   return (
//     <div className="mt-8 overflow-hidden bg-white shadow-sm border border-gray-200 rounded-xl">
//       <div className="px-4 py-5 sm:px-6 border-b border-gray-200 bg-gray-50">
//         <h3 className="text-lg font-semibold text-gray-900">Historique des heures</h3>
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-300">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Début</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fin</th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Total</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200 bg-white">
//             {data.map((session) => (
//               <tr key={session.id} className="hover:bg-gray-50 transition-colors">
//                 <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
//                   {new Date(session.dateDebut).toLocaleDateString('fr-FR')}
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
//                   {new Date(session.dateDebut).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
//                   {new Date(session.dateFin).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
//                 </td>
//                 <td className="whitespace-nowrap px-6 py-4 text-sm text-right font-semibold text-blue-600">
//                   {session.total}h
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//           {/* Ligne de total */}
//           <tfoot className="bg-gray-50 font-bold">
//             <tr>
//               <td colSpan={3} className="px-6 py-4 text-sm text-gray-900 text-right">Cumul Total :</td>
//               <td className="px-6 py-4 text-sm text-right text-blue-700">
//                 {data.reduce((acc, curr) => acc + curr.total, 0)}h
//               </td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// }
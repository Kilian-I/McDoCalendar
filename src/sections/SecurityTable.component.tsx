//sections.SecurityTable.component.tsx
import React from 'react';
// Définition rigoureuse des types
interface SecurityElement {
  type: string;
  utilite: string;
  implementation: string;
  risque: string;
  criticite: 'Critique' | 'Élevée';
}

const securityData: SecurityElement[] = [
  // --- SÉCURITÉ TECHNIQUE (Tes données optimisées) ---
  { 
    type: "Variables d'Environnement", 
    utilite: "Isolation des secrets et clés de configuration du code source.", 
    implementation: "Fichiers .env (exclus via .gitignore)", 
    risque: "Fuite de clés API, identifiants BDD, secrets JWT.", 
    criticite: "Critique" 
  },
  { 
    type: "Hachage des Mots de Passe", 
    utilite: "Rendre les mots de passe illisibles même en cas de vol de la BDD.", 
    implementation: "Algorithme robuste (ex: Argon2 ou bcrypt)", 
    risque: "Compromission massive des comptes utilisateurs.", 
    criticite: "Critique" 
  },
  { 
    type: "ORM (Prisma)", 
    utilite: "Protection contre les injections de code malveillant dans la base.", 
    implementation: "Requêtes préparées et typage fort.", 
    risque: "Injection SQL (vol ou suppression de données).", 
    criticite: "Critique" 
  },
  { 
    type: "DTOs & Validation", 
    utilite: "Garantie de l'intégrité et du format des données entrantes.", 
    implementation: "class-validator / Zod", 
    risque: "Injection de données corrompues, crash serveur (DoS).", 
    criticite: "Élevée" 
  },
  { 
    type: "JWT & Guards", 
    utilite: "Gestion sécurisée de l'authentification et du contrôle d'accès.", 
    implementation: "Access Tokens signés + Middleware de protection.", 
    risque: "Accès non-autorisé aux ressources privées.", 
    criticite: "Critique" 
  },
  { 
    type: "Cookies HTTP-only", 
    utilite: "Protection du token d'authentification côté client.", 
    implementation: "Flag HttpOnly et Secure sur les cookies.", 
    risque: "Vol de session via attaques XSS.", 
    criticite: "Critique" 
  },
  { 
    type: "CORS Policy", 
    utilite: "Restriction des domaines autorisés à interroger l'API.", 
    implementation: "Config Access-Control-Allow-Origin", 
    risque: "Appels malveillants depuis des sites tiers.", 
    criticite: "Élevée" 
  },
  { 
    type: "HTTPS (SSL/TLS)", 
    utilite: "Chiffrement des données durant le transit.", 
    implementation: "Certificat SSL (ex: Let's Encrypt)", 
    risque: "Interception des données (Man-in-the-Middle).", 
    criticite: "Critique" 
  },
  // --- CONFORMITÉ RGPD ---
  { 
    type: "Minimisation des données", 
    utilite: "Principe de nécessité du RGPD.", 
    implementation: "Collecte stricte du nécessaire (Privacy by Design)", 
    risque: "Traitement illicite et stockage inutile.", 
    criticite: "Critique" 
  },
  { 
    type: "Droit à l'oubli / Accès", 
    utilite: "Garantie des droits fondamentaux des utilisateurs.", 
    implementation: "Logique de suppression et d'export de compte", 
    risque: "Non-conformité légale et sanctions CNIL.", 
    criticite: "Élevée" 
  }
];

const SecurityTable: React.FC = () => {
  return (
    <div className="w-full my-6 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white text-sm">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="px-4 py-4 font-semibold">Type de Sécurité</th>
              <th className="px-4 py-4 font-semibold">Utilité</th>
              <th className="px-4 py-4 font-semibold">Implémentation</th>
              <th className="px-4 py-4 font-semibold text-red-300">Risque si absent</th>
              <th className="px-4 py-4 font-semibold text-center whitespace-nowrap">Criticité</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {securityData.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors duration-150">
                <td className="px-4 py-4 font-bold text-slate-900">{item.type}</td>
                <td className="px-4 py-4 text-slate-600">{item.utilite}</td>
                <td className="px-4 py-4">
                  <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-mono">
                    {item.implementation}
                  </code>
                </td>
                <td className="px-4 py-4 text-red-600 italic leading-relaxed">
                  {item.risque}
                </td>
                <td className="px-4 py-4 text-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    item.criticite === 'Critique' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    <span className="w-2 h-2 mr-1.5 rounded-full bg-current"></span>
                    {item.criticite}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecurityTable;
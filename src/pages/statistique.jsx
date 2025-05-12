import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00bcd4"];

export default function Statistique() {

  const [comptes] = useLocalStorage("comptes", []);

  const count = comptes.length;
  const total = comptes.reduce((sum, c) => sum + parseFloat(c.solde || 0), 0);
  const moyenne = count > 0 ? (total / count).toFixed(2) : 0;

  const data = comptes.map((c) => ({
    name: c.nom,
    value: parseFloat(c.solde || 0),
  }));

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
        📊 Statistiques Bancaires
      </h2>

      {/*Statistique*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-gray-500">Nombre de comptes</p>
          <p className="text-2xl font-bold text-blue-700">{count}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-gray-500">Solde total</p>
          <p className="text-2xl font-bold text-green-700">{total.toFixed(2)} €</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <p className="text-gray-500">Solde moyen</p>
          <p className="text-2xl font-bold text-purple-700">{moyenne} €</p>
        </div>
      </div>

       {/*Tableau des Comptes*/}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">📋 Liste des Comptes</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Nom</th>
              <th className="border p-3 text-right">Solde (€)</th>
            </tr>
          </thead>
          <tbody>
            {comptes.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="border p-3">{c.nom}</td>
                <td className="border p-3 text-right">{parseFloat(c.solde).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/*Graphique*/} 
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">📈 Répartition des soldes</h3>
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-600">Aucun compte à afficher.</p>
        )}
      </div>
    </div>
  );
}

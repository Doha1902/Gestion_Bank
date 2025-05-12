import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

 export default function OperationsBancaires() {
  const [comptes, setComptes] = useLocalStorage("comptes", []);
  const [selectedId, setSelectedId] = useState(
    comptes.length > 0 ? comptes[0].id : ""
  );
  const [montant, setMontant] = useState("");

  const handleOperation = (type) => {
    const m = parseFloat(montant);
    if (isNaN(m) || m <= 0) {
      alert("Veuillez saisir un montant valide (> 0).");
      return;
    }

    setComptes(
      comptes.map((c) => {
        if (c.id === selectedId) {
          if (type === "retrait" && c.solde < m) {
            alert("Solde insuffisant pour ce retrait.");
            return c;
          }
          return {
            ...c,
            solde: type === "depot" ? c.solde + m : c.solde - m,
          };
        }
        return c;
      })
    );

    setMontant("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Opérations Bancaires</h2>

      {comptes.length === 0 ? (
        <p className="text-red-600">Aucun compte disponible. Ajoutez-en d’abord.</p>
      ) : (
        <>
          <label className="block mb-2">
            Sélectionnez un compte :
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(parseInt(e.target.value))}
              className="border p-2 w-full mt-1"
            >
              {comptes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nom} – Solde: {c.solde}€
                </option>
              ))}
            </select>
          </label>

          <label className="block mb-4">
            Montant (€) :
            <input
              type="number"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              className="border p-2 w-full mt-1"
              placeholder="0.00"
            />
          </label>

          <div className="flex gap-4">
            <button
              onClick={() => handleOperation("depot")}
              className="flex-1 bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              Dépôt
            </button>
            <button
              onClick={() => handleOperation("retrait")}
              className="flex-1 bg-red-600 text-white p-2 rounded hover:bg-red-700"
            >
              Retrait
            </button>
          </div>
        </>
      )}
    </div>
  );
}

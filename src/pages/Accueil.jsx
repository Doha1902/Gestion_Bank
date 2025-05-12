/* import React from "react";

export default function Accueil() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background *}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Content on top of video *}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/50">
        <div className="text-center text-white space-y-4 px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Bienvenue à la Banque</h1>
          <p className="text-lg md:text-2xl">Gérez vos comptes simplement et efficacement</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg">
            Commencer
          </button>
        </div>
      </div>
    </div>
  );
}
*/ 
import React from "react";
import backgroundVideo from "../assets/background.mp4"; // adjust path

export default function Accueil() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content over video */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-5xl font-bold">Bienvenue à la Banque</h1>
      </div>
    </div>
  );
}

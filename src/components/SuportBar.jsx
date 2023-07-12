import React from "react";
import { SiMicrosoftexcel } from "react-icons/si";
import { MdOutlinePlaylistAdd } from "react-icons/md";
const SuportBar = () => {
  return (
    <div className="flex mt-2 mb-6  items-center justify-between max-w-[60px]">
      {/* <h1>Excel</h1> */}
      {/* <h2>Salvar</h2> */}
      <button>
        <SiMicrosoftexcel title="Exportar Excel" />
      </button>
      <button>
        <MdOutlinePlaylistAdd  title="Salvar"/>
      </button>
    </div>
  );
};

export default SuportBar;

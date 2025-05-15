import { dataSalones } from "./data/dataSalones";
import { useEffect, useState } from "react";
import type { Salon, Alumno } from "./types";
import { getGifs } from "./helpers/getGifs";

function App() {
  const [salones, setSalones] = useState<Salon[]>([]);

  useEffect(() => {
    setSalones(dataSalones);
    getAllGifs();
  }, []);

  const handleChangeStatus = (alumnoId: Alumno["id"]) => {
    setSalones((prevSalones) =>
      prevSalones.map((salon) => ({
        ...salon,
        alumnos: salon.alumnos.map((alumno) =>
          alumno.id === alumnoId
            ? { ...alumno, activo: alumno.activo === true ? false : true }
            : alumno
        ),
      }))
    );
  };


  // Ejemplo de llamado a la API
  const getAllGifs = async () => {
    const gits = await getGifs({ category: "gato" });
    console.log(gits);
  };

  
  const CountBySalon = (salonId: Salon["id"]) => {
    const salon = salones.find((salon) => salon.id === salonId);
    if (salon) {
      //const count = salon.alumnos.filter((alumno) => alumno.activo).length;
      const count = salon.alumnos.reduce((acc, alumno) => {
        if (alumno.activo) {
          return acc + 1;
        }
        return acc;
      }, 0);
      return count;
    }
    return 0;
  };

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">Escuelita!</h1>
        <div className="grid grid-cols-4 gap-4 ml-4 mt-4">
          {salones.map((salon) => (
            <div key={salon.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">
                {salon.name}{" "}
                <span className="text-gray-500 text-xs">
                  {" "}
                  Activos: {CountBySalon(salon.id)}{" "}
                </span>
              </h2>
              <ul>
                {salon.alumnos.map((alumno) => (
                  <li key={alumno.id}>
                    {alumno.nombre} {alumno.apellido}{" "}
                    <button onClick={() => handleChangeStatus(alumno.id)}>
                      <span
                        className={
                          alumno.activo ? "text-green-500 " : "text-red-500"
                        }
                      >
                        {alumno.activo ? "Activo" : "Inactivo"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { dataSalones } from "./data/dataSalones";
import { useEffect, useState } from "react";
import type { Salon } from "./types";

function App() {
  const [salones, setSalones] = useState<Salon[]>([]);

  useEffect(() => {
    setSalones(dataSalones);
  }, []);

  const handleChangeStatus = (alumnoId: number) => {
    setSalones((prevSalones) =>
      prevSalones.map((salon) => ({...salon,alumnos: salon.alumnos.map((alumno) =>
                                                                                alumno.id === alumnoId
                                                                                ? { ...alumno, activo: alumno.activo === true ? false : true }  : alumno
        ),
      }))
    );
  };

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <div className="grid grid-cols-4 gap-4">
          {salones.map((salon) => (
            <div key={salon.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{salon.name}</h2>
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

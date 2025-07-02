
import tecnologias from "../script/tecnologias";

const TecnologiaCardList = () => {
    return (
        <section className="section-tecnologias">
            {tecnologias.map((tec) => (
                <div
                key={tec.id}
                className=" rounded-2xl shadow-md p-4 flex flex-col items-center"
                >
                <img src={tec.imagen} alt={tec.nombre} className="w-20 h-20 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{tec.nombre}</h3>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${tec.conocimiento}%` }}
                    ></div>
                </div>
                <p className="text-sm text-gray-700">{tec.conocimiento}% de conocimiento</p>
                </div>
            ))}
        </section>
    );
    };

export default TecnologiaCardList;

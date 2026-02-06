import { Code2, ShieldCheck, Database, FileJson } from "lucide-react";

const Backend = () => {
  return (
    // Ajuste de padding: p-4 en móvil, md:p-10 para mayor aire en desktop
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 p-4 md:p-10">
      {/* Encabezado */}
      <header className="mb-12">
        {/* Tamaño de fuente adaptable */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Arquitectura del Servidor
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          Diseño de una API escalable utilizando{" "}
          <span className="text-[#3178C6] font-semibold">TypeScript</span> para
          el tipado estricto y{" "}
          <span className="text-[#00ED64] font-semibold">Mongoose</span> para el
          modelado de datos NoSQL.
        </p>
      </header>

      {/* Grid principal: 1 columna en móvil, 2 en pantallas grandes (lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Columna Izquierda: Explicación Técnica */}
        <div className="space-y-8">
          <section>
            <h2 className="text-[#3178C6] font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <Code2 size={18} /> Modelado con TypeScript
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Para garantizar la integridad de los datos, definimos una{" "}
              <span className="text-white font-medium">Interface</span> que
              extiende de{" "}
              <code className="bg-slate-800 px-1 rounded text-[#3178C6]">
                Document
              </code>
              . Esto nos permite tener autocompletado y validación de tipos en
              todo el ciclo de vida de la petición, reduciendo errores humanos
              en el manejo de propiedades como{" "}
              <code className="text-slate-200">modelo</code> o{" "}
              <code className="text-slate-200">precio</code>.
            </p>
          </section>

          <section>
            <h2 className="text-[#00ED64] font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <ShieldCheck size={18} /> Esquema de Mongoose
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              El esquema no solo define la estructura en MongoDB Atlas, sino que
              aplica capas de seguridad:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ED64] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-200">Validación:</strong>{" "}
                  Mensajes de error personalizados para campos obligatorios.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ED64] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-200">Limpieza:</strong> Uso de{" "}
                  <code className="text-slate-200">trim: true</code> para evitar
                  strings con espacios accidentales.
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00ED64] mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-200">Automatización:</strong>{" "}
                  Generación automática de la fecha de creación en el servidor.
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* Columna Derecha: El Código (Responsive) */}
        <div className="relative group w-full overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3178C6] to-[#00ED64] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#0a0a0a] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                product.model.ts
              </span>
            </div>

            <div className="p-2">
              <img
                src="/codigo.png"
                alt="Código del Modelo"
                className="rounded-lg w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Técnico: 1 col móvil, 3 cols en desktop */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <TechBadge
          icon={<Database />}
          title="MongoDB Atlas"
          desc="Base de datos NoSQL en la nube."
        />
        <TechBadge
          icon={<FileJson />}
          title="RESTful API"
          desc="Endpoints estandarizados para CRUD."
        />
        <TechBadge
          icon={<Code2 />}
          title="ES6+ Syntax"
          desc="Uso de Async/Await y Destructuring."
        />
      </div>
    </div>
  );
};

const TechBadge = ({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="bg-[#0a0a0a] border border-slate-800 p-4 rounded-xl flex items-center gap-4 transition-colors hover:border-slate-700">
    <div className="text-slate-500 shrink-0">{icon}</div>
    <div>
      <h4 className="text-white text-sm font-bold">{title}</h4>
      <p className="text-slate-500 text-xs">{desc}</p>
    </div>
  </div>
);

export default Backend;

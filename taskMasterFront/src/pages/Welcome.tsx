import {
  Database,
  Code2,
  Globe,
  ShieldCheck,
  Terminal,
  Cpu,
} from "lucide-react";

const Welcome = () => {
  return (
    // Ajuste de padding: p-6 en móvil, p-10 en desktop
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black p-6 md:p-10">
      {/* Hero Section */}
      <header className="mb-12">
        {/* Tamaño de fuente adaptable: text-3xl en móvil, text-5xl en desktop */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Proyecto: <span className="text-[#3178C6]">TaskMaster</span>{" "}
          <span className="text-[#00ED64]">API</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          "Esta App Web se construyo con la finalidad de llevar a cabo una
          posible solución a un desafío técnico que podría ser propuesto por la
          Empresa PuntoMáximo."
        </p>
      </header>

      {/* Grid de Objetivos y Stack */}
      {/* grid-cols-1 asegura que en móvil se vea una card debajo de la otra */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Card: El Objetivo */}
        <div className="bg-[#0a0a0a] border border-slate-800 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Database size={120} className="text-[#00ED64]" />
          </div>
          <h2 className="text-[#00ED64] font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <ShieldCheck size={16} /> Objetivo Principal
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed relative z-10">
            Se desarrollo una{" "}
            <span className="text-white font-semibold">API RESTful</span> capaz
            de gestionar operaciones CRUD complejas, garantizando la integridad
            de los datos mediante esquemas de Mongoose y validación rigurosa en
            el lado del servidor.
          </p>
        </div>

        {/* Card: El Stack Tecnológico */}
        <div className="bg-[#0a0a0a] border border-slate-800 p-6 md:p-8 rounded-3xl">
          <h2 className="text-[#3178C6] font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <Cpu size={16} /> Stack Tecnologico
          </h2>
          {/* StackItem grid: 1 columna en móvil pequeño, 2 en tablets/desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StackItem
              icon={<Code2 size={18} />}
              name="TypeScript"
              color="text-[#3178C6]"
            />
            <StackItem
              icon={<Terminal size={18} />}
              name="Node.js / Express"
              color="text-white"
            />
            <StackItem
              icon={<Database size={18} />}
              name="MongoDB Atlas"
              color="text-[#00ED64]"
            />
            <StackItem
              icon={<Globe size={18} />}
              name="Google Cloud"
              color="text-[#4285F4]"
            />
          </div>
        </div>
      </div>

      {/* Sección: ¿Qué demuestra este proyecto? */}
      <div className="bg-[#0a0a0a] border border-slate-800 rounded-3xl p-6 md:p-8">
        <h2 className="text-white font-bold text-xl md:text-2xl mb-8">
          Capacidades y Arquitectura
        </h2>
        {/* Grid de capacidades: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Capability
            title="Tipo de Seguridad"
            desc="Uso de Interfaces y Types para eliminar errores en tiempo de ejecución."
            border="border-t-[#3178C6]"
          />
          <Capability
            title="Modelado NoSQL"
            desc="Modelado de datos flexible y eficiente con Mongoose para escalabilidad."
            border="border-t-[#00ED64]"
          />
          <Capability
            title="Contenedores y Despliegue"
            desc="Dockerfile optimizado para despliegues rápidos en Google Cloud Run."
            border="border-t-[#4285F4]"
          />
        </div>
      </div>
    </div>
  );
};

const StackItem = ({
  icon,
  name,
  color,
}: {
  icon: any;
  name: string;
  color: string;
}) => (
  <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
    <span className={color}>{icon}</span>
    <span className="text-sm font-medium text-slate-200">{name}</span>
  </div>
);

const Capability = ({
  title,
  desc,
  border,
}: {
  title: string;
  desc: string;
  border: string;
}) => (
  <div className={`pt-4 border-t-2 ${border}`}>
    <h3 className="text-white font-bold mb-2">{title}</h3>
    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

export default Welcome;

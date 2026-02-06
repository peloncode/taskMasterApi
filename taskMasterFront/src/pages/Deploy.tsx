import {
  Ship,
  Cloud,
  Globe,
  Box,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Deploy = () => {
  return (
    // Ajuste de padding adaptativo
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 p-4 md:p-10">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Cloud className="text-[#4285F4] shrink-0" /> Estrategia de Despliegue
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          Infraestructura moderna basada en{" "}
          <span className="text-white font-semibold">Contenedores</span> para
          garantizar portabilidad y escalabilidad inmediata.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card: Dockerización */}
        <div className="bg-[#0a0a0a] border border-slate-800 p-6 md:p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
            <Box size={100} className="text-[#2496ED]" />
          </div>
          <h2 className="text-[#2496ED] font-bold uppercase tracking-widest text-xs md:text-sm mb-6 flex items-center gap-2">
            <Ship size={18} /> Docker & Portabilidad
          </h2>
          <p className="text-slate-300 text-sm md:text-base mb-6 relative z-10 leading-relaxed">
            El proyecto se encuentra completamente{" "}
            <span className="text-white font-semibold">dockerizado</span>. He
            diseñado un <code className="text-slate-200">Dockerfile</code>{" "}
            optimizado de múltiples etapas (multi-stage builds) para reducir el
            tamaño de la imagen final.
          </p>
          <ul className="space-y-3 relative z-10">
            <li className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />{" "}
              Listo para Artifact Registry (GCP)
            </li>
            <li className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />{" "}
              Compatible con Kubernetes y Serverless
            </li>
          </ul>
        </div>

        {/* Card: Infraestructura */}
        <div className="bg-[#0a0a0a] border border-slate-800 p-6 md:p-8 rounded-3xl group">
          <h2 className="text-[#4285F4] font-bold uppercase tracking-widest text-xs md:text-sm mb-6 flex items-center gap-2">
            <Globe size={18} /> Cloud Delivery
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                <span className="text-blue-400 font-bold block mb-1">
                  Target Original:
                </span>{" "}
                Google Cloud Run. El código está optimizado para despliegue
                serverless, manejando variables de entorno y escalado
                automático.
              </p>
            </div>
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                <span className="text-emerald-400 font-bold block mb-1">
                  Estado Actual:
                </span>{" "}
                Desplegado en{" "}
                <span className="text-white font-bold italic">Railway</span>.
                Para esta demostración, se optó por una plataforma de entrega
                continua (CI/CD) que permite ver el CRUD en tiempo real.
              </p>
            </div>
          </div>
        </div>

        {/* Nota Técnica sobre Cuotas */}
        <div className="md:col-span-2 bg-slate-900/30 border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row items-start gap-4">
          <AlertCircle className="text-amber-500 shrink-0" size={24} />
          <div>
            <h3 className="text-white font-bold mb-1 text-sm">
              Nota sobre Google Cloud Platform (GCP)
            </h3>
            <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">
              Debido a políticas de cuotas y límites de facturación en mi cuenta
              personal de GCP, el despliegue final se migró a un entorno de
              contenedores en Railway. Sin embargo, el pipeline está preparado
              para ejecutarse en Cloud Build hacia Google Cloud Run sin cambios
              en el core de la arquitectura.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;

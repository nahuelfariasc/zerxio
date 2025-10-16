"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      nombre: String(data.get("nombre") || ""),
      empresa: String(data.get("empresa") || ""),
      email: String(data.get("email") || ""),
      telefono: String(data.get("telefono") || ""),
      asunto: String(data.get("asunto") || ""),
      mensaje: String(data.get("mensaje") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.ok === false) {
        throw new Error(json?.message || "No se pudo enviar tu mensaje");
      }

      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Ocurrió un error inesperado";
      setError(message);
      setStatus("error");
    }
  }

  return (
    <form 
      className="space-y-6 p-0" 
      onSubmit={onSubmit}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div 
          className="space-y-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Label htmlFor="nombre" className="text-slate-300">Nombre</Label>
          <Input id="nombre" name="nombre" placeholder="Tu nombre completo" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400" required />
        </div>
        <div 
          className="space-y-2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Label htmlFor="empresa" className="text-slate-300">Empresa (Opcional)</Label>
          <Input id="empresa" name="empresa" placeholder="Nombre de tu empresa" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400" />
        </div>
      </div>

      <div 
        className="space-y-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Label htmlFor="email" className="text-slate-300">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400" required />
      </div>

      <div 
        className="space-y-2"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <Label htmlFor="telefono" className="text-slate-300">Teléfono (Opcional)</Label>
        <Input id="telefono" name="telefono" type="tel" placeholder="+54 9 11 1234-5678" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400" />
      </div>

      <div 
        className="space-y-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Label htmlFor="asunto" className="text-slate-300">Asunto</Label>
        <select id="asunto" name="asunto" className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-cyan-400 focus:outline-none" required>
          <option value="">Selecciona un tema</option>
          <option value="hosting-compartido">Hosting Compartido</option>
          <option value="wordpress-hosting">WordPress Hosting</option>
          <option value="hosting-reseller">Hosting Reseller</option>
          <option value="soporte-tecnico">Soporte Técnico</option>
          <option value="facturacion">Facturación</option>
          <option value="ventas">Consulta de Ventas</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div 
        className="space-y-2"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        <Label htmlFor="mensaje" className="text-slate-300">Mensaje</Label>
        <Textarea id="mensaje" name="mensaje" placeholder="Cuéntanos cómo podemos ayudarte..." rows={5} className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-cyan-400 resize-none" required />
      </div>

      <div 
        className="space-y-3"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Button 
          type="submit" 
          disabled={status === "loading"} 
          className="w-full cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 text-slate-900 font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
        >
          {status === "loading" ? (
            <span className="inline-flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : (
            <span className="inline-flex items-center">
              <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
              Enviar Mensaje
            </span>
          )}
        </Button>
        {status === "success" && (
          <div 
            className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded-md mt-4 flex items-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</span>
          </div>
        )}
        {status === "error" && (
          <p 
            className="text-red-400 text-sm mt-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

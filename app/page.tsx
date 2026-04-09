"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

export default function MonttariLanding() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    cnpj: "",
    cidade: "",
    estado: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    // Validação obrigatória
    if (!formData.nome || !formData.whatsapp || !formData.cnpj || !formData.cidade || !formData.estado) {
      setSubmitMessage("Por favor, preencha todos os campos obrigatórios.")
      setIsSubmitting(false)
      return
    }

    try {
      await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          whatsapp: formData.whatsapp,
          cnpj: formData.cnpj,
          cidade: formData.cidade,
          estado: formData.estado,
          timestamp: new Date().toLocaleString("pt-BR"),
        }),
      })

      setSubmitMessage("Cadastro enviado! Nossa equipe entrará em contato em breve.")
      setFormData({
        nome: "",
        whatsapp: "",
        cnpj: "",
        cidade: "",
        estado: "",
      })
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitMessage("Erro ao enviar formulário. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* First Section - Hero */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/warehouse-industrial-bg.png"
            alt="Warehouse background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center pr-[7px] pb-[39px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6 lg:space-y-8">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">monttari.</h1>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4 leading-tight">
                    Seja um revendedor
                    <br />
                    oficial Monttari e
                    <br />
                    venda gôndolas direto
                    <br />
                    da fábrica!
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed">
                    O programa de revenda ideal para quem
                    <br className="hidden sm:block" />
                    quer ampliar o catálogo, ganhar margens
                    <br className="hidden sm:block" />
                    atrativas e contar com{" "}
                    <strong>
                      o respaldo de uma
                      <br className="hidden sm:block" />
                      fábrica com 22 anos de mercado!
                    </strong>
                  </p>
                </div>

                {/* Contact Form */}
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 max-w-md">
                  {/* Nome */}
                  <div>
                    <label htmlFor="nome" className="sr-only">Nome completo</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Nome *"
                      required
                      aria-required="true"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-[#e9672d]"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label htmlFor="whatsapp" className="sr-only">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="WhatsApp *"
                      required
                      aria-required="true"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-[#e9672d]"
                    />
                  </div>

                  {/* CNPJ */}
                  <div>
                    <label htmlFor="cnpj" className="sr-only">CNPJ</label>
                    <input
                      type="text"
                      id="cnpj"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleInputChange}
                      placeholder="CNPJ *"
                      required
                      aria-required="true"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-[#e9672d]"
                    />
                  </div>

                  {/* Cidade */}
                  <div>
                    <label htmlFor="cidade" className="sr-only">Cidade</label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      placeholder="Cidade *"
                      required
                      aria-required="true"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-[#e9672d]"
                    />
                  </div>

                  {/* Estado */}
                  <div>
                    <label htmlFor="estado" className="sr-only">Estado</label>
                    <select
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded bg-white text-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-[#e9672d]"
                    >
                      <option value="">Selecione o estado *</option>
                      <option value="AL">Alagoas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="MA">Maranhão</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="SE">Sergipe</option>
                      <option value="outros">Outros estados</option>
                    </select>
                  </div>

                  {submitMessage && (
                    <div
                      className={`text-sm p-2 rounded ${submitMessage.includes("Obrigado") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {submitMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e9672d] hover:bg-[#d55a26] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base rounded transition-colors duration-200"
                  >
                    {isSubmitting ? "Enviando..." : "Quero ser um revendedor"}
                  </button>
                </form>
              </div>

              {/* Right Content - Circular Images */}
              <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 sm:border-4 border-white overflow-hidden shadow-2xl">
                    <Image
                      src="/modern-pharmacy-shelving-units-with-blue-accents.png"
                      alt="Gôndolas Monttari disponíveis para revenda"
                      width={320}
                      height={320}
                      priority
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    />
                  </div>

                  <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-2 sm:border-4 border-white overflow-hidden shadow-2xl">
                    <Image
                      src="/modern-pharmacy-interior-with-organized-shelving.png"
                      alt="Linha de produtos Monttari para revendedores"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                      sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                    />
                  </div>

                  <div className="absolute -bottom-2 left-6 sm:-bottom-4 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#e9672d] border-2 sm:border-4 border-white flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-lg sm:text-xl">m.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Benefits */}
      <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 text-balance">
            Por que se tornar um
            <br />
            revendedor Monttari?
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <Image
                src="/modern-pharmacy-interior-new.png"
                alt="Catálogo Monttari de gôndolas para revendedores"
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#e9672d] mb-2 sm:mb-3">
                  Margens atrativas direto da fábrica
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Compre sem intermediários e garanta a melhor rentabilidade em cada venda do seu portfólio
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#e9672d] mb-2 sm:mb-3">
                  Catálogo completo e pronto para revender
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Gôndolas, expositores e balcões para farmácia, varejo e construção — tudo com qualidade comprovada
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#e9672d] mb-2 sm:mb-3">
                  Suporte comercial e técnico do início ao fim
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Treinamento de produto, materiais de venda e atendimento prioritário para fechar mais negócios
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4 sm:pt-6 text-center">
                <button
                  onClick={scrollToTop}
                  className="bg-[#e9672d] hover:bg-[#d55a26] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded transition-colors duration-200"
                >
                  Quero ser revendedor!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Why Choose Monttari */}
      <div className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/orange-curved-bg.png"
            alt="Orange curved background"
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-800/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12 text-balance">
            Por que revender Monttari é o melhor negócio?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/shelving-icon.png"
                  alt="Estruturas resistentes e duráveis"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Produto de fábrica que não dá dor de cabeça
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Pintura eletrostática e materiais premium reduzem reclamações e fortalecem a sua reputação como revendedor.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/blueprint-icon.png"
                  alt="Ambientes planejados com arquitetos especializados"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Projetos sob medida para fechar grandes vendas
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Nosso time de arquitetos apoia o revendedor em propostas personalizadas que destravam contratos maiores.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/paint-palette-icon.png"
                  alt="Personalização para sua identidade visual"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                Customização que aumenta o seu ticket médio
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Cores, medidas e acabamentos sob demanda — você atende cada cliente sem perder venda por falta de opção.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6">
                <Image
                  src="/customer-service-icon.png"
                  alt="Atendimento especializado"
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Atendimento B2B prioritário</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Canal exclusivo para revendedores: cotações ágeis, prazos transparentes e suporte pós-venda dedicado.
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <Image
              src="/pharmacy-shelving-with-medications.png"
              alt="Linha de gôndolas Monttari para revendedores"
              width={800}
              height={500}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-xl"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded transition-colors duration-200 shadow-lg"
            >
              Quero ser revendedor!
            </button>
          </div>
        </div>
      </div>

      {/* Fourth Section - Partner Companies */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12 text-balance">
            Marcas que já vendem
            <br />
            com a Monttari
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 items-center justify-items-center">
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/vitamasa-logo.png"
                  alt="Vitamasa"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/lojas-patan-logo.png"
                  alt="Lojas Patan"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/moura-logo.png"
                  alt="Moura"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/mentos-logo.png"
                  alt="Mentos"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/tramontina-logo.png"
                  alt="Tramontina"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/bauducco-logo.png"
                  alt="Bauducco"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/luzarte-logo.png"
                  alt="Luzarte"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-12 sm:h-16">
                <Image
                  src="/disensa-logo.png"
                  alt="Disensa"
                  width={120}
                  height={48}
                  loading="lazy"
                  className="h-8 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 text-center">
            <button
              onClick={scrollToTop}
              className="bg-[#e9672d] hover:bg-[#d55a26] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded transition-colors duration-200"
            >
              Quero ser revendedor!
            </button>
          </div>
        </div>
      </div>

      {/* Fifth Section - About Us & Testimonials */}
      <div className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto mb-16 sm:mb-20">
            <div>
              <Image
                src="/monttari-building-new.png"
                alt="Fábrica Monttari"
                width={600}
                height={400}
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Há 22 anos a Monttari fabrica acessórios comerciais em aço e madeira para exposição e armazenamento de
                produtos. Hoje, ampliamos nossa rede e abrimos oportunidades para revendedores que querem oferecer um
                portfólio completo de gôndolas, expositores e balcões com a chancela de uma fábrica consolidada.
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Como revendedor oficial, você passa a contar com produção própria, prazos competitivos, condições
                especiais de compra e demanda recorrente em segmentos como farmácias, armazéns de construção, lojas de
                utilidades, supermercados, vestuário e demais nichos do varejo brasileiro.
              </p>

              {/* CTA Button */}
              <div className="pt-4 text-center">
                <button
                  onClick={scrollToTop}
                  className="bg-[#e9672d] hover:bg-[#d55a26] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded transition-colors duration-200"
                >
                  Quero ser revendedor!
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#e9672d] mb-8 sm:mb-12 text-balance">
              QUEM JÁ REVENDE MONTTARI RECOMENDA!
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-[#e9672d] text-white rounded-lg p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mx-auto mb-3 sm:mb-4 overflow-hidden">
                  <Image
                    src="/professional-man-smiling.png"
                    alt="José"
                    width={64}
                    height={64}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">José</h3>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90">Representante comercial</p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  "Em 6 meses revendendo Monttari, dobrei minha carteira de clientes e aumentei minha margem em 30%."
                </p>
              </div>

              <div className="bg-[#e9672d] text-white rounded-lg p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-[#e9672d] font-bold text-xs sm:text-sm">RedeMed</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">RedeMed</h3>
                <p className="text-xs sm:text-sm mb-3 sm:mb-4 opacity-90">Distribuidor parceiro</p>
                <p className="text-xs sm:text-sm leading-relaxed">
                  "O suporte comercial e os prazos da fábrica fazem a diferença na hora de fechar grandes contratos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section - Final CTA */}
      <div className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/dark-hexagonal-bg.png"
            alt="Dark hexagonal background"
            fill
            loading="lazy"
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Pronto para revender Monttari e ampliar seus ganhos?
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Cadastre-se agora e fale com o nosso time comercial: condições especiais, suporte completo e oportunidade de
            crescer junto com uma marca consolidada há 22 anos.
          </p>

          {/* Final CTA Button */}
          <button
            onClick={scrollToTop}
            className="bg-[#e9672d] hover:bg-[#d55a26] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-lg rounded transition-colors duration-200"
          >
            Quero ser revendedor!
          </button>
        </div>
      </div>
    </div>
  )
}

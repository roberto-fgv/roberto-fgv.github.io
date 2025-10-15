import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ArrowLeft, ExternalLink, BookOpen, MessageSquare, FileText, AlertCircle } from "lucide-react";

export default function ExperienceAcceleratorNotebook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Botão Voltar */}
        <Button variant="outline" asChild className="mb-6">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar à Home
          </a>
        </Button>

        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-indigo-900">
            Experience Accelerator Notebook
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Explore cases e insights sobre as disciplinas Experience Accelerator I, II e III
          </p>
          <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
            <a 
              href="https://notebooklm.google.com/notebook/8f136821-fcc0-4149-a46f-8d5b50bca00b" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" /> Acessar NotebookLM
            </a>
          </Button>
        </header>

        {/* Introdução */}
        <section className="mb-12">
          <Card className="border-indigo-200 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-4 text-indigo-900">O que é este Notebook?</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Este NotebookLM é um repositório de conhecimento alimentado com cases, 
                estudos e materiais relacionados às disciplinas Experience Accelerator I, II e III. 
                Utilizando inteligência artificial do Google NotebookLM, você pode fazer perguntas 
                e obter respostas fundamentadas nos documentos fornecidos, com referências diretas 
                às fontes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Como Funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-900">Como Funciona</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-indigo-200 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-8 w-8 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Base de Conhecimento</h3>
                    <p className="text-gray-700">
                      O notebook foi alimentado com cases, apresentações, artigos e materiais 
                      das disciplinas Experience Accelerator I, II e III, cobrindo metodologias, 
                      frameworks e experiências práticas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <MessageSquare className="h-8 w-8 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Faça uma Pergunta</h3>
                    <p className="text-gray-700">
                      Digite sua dúvida como se estivesse conversando com um especialista. 
                      O sistema busca informações relevantes nos documentos e fornece respostas 
                      contextualizadas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <FileText className="h-8 w-8 text-indigo-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Revise as Fontes</h3>
                    <p className="text-gray-700">
                      Cada resposta inclui referências clicáveis aos documentos originais. 
                      Você pode verificar o contexto completo e explorar os materiais fonte 
                      para aprofundar seu conhecimento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <AlertCircle className="h-8 w-8 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">4. Atenção</h3>
                    <p className="text-gray-700">
                      As respostas são baseadas exclusivamente nos materiais fornecidos ao notebook. 
                      Para informações mais recentes ou tópicos não cobertos, consulte diretamente 
                      os professores ou materiais complementares.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Exemplos Práticos */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-900">Exemplos de Perguntas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-indigo-200 shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-indigo-800">Metodologias</h3>
                <p className="text-gray-700 italic">
                  "Quais são as principais metodologias de design thinking abordadas 
                  no Experience Accelerator I?"
                </p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-indigo-800">Cases Práticos</h3>
                <p className="text-gray-700 italic">
                  "Me mostre exemplos de cases sobre transformação digital e experiência 
                  do cliente estudados nas disciplinas."
                </p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-md hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-indigo-800">Frameworks</h3>
                <p className="text-gray-700 italic">
                  "Como aplicar o framework de jornada do cliente em projetos de 
                  experiência? Há exemplos práticos?"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sobre as Disciplinas */}
        <section className="mb-12">
          <Card className="border-indigo-200 shadow-lg bg-gradient-to-r from-indigo-50 to-blue-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-4 text-indigo-900">Sobre Experience Accelerator</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                A série de disciplinas Experience Accelerator (I, II e III) faz parte do programa 
                da FGV EAESP e tem como objetivo desenvolver competências em design de experiência, 
                inovação e transformação digital. As disciplinas abordam:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2 ml-4">
                <li>Metodologias ágeis e design thinking</li>
                <li>Análise de jornada do cliente e touchpoints</li>
                <li>Cases de transformação digital e inovação</li>
                <li>Frameworks de experiência do usuário e cliente</li>
                <li>Práticas de customer success e engajamento</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <Card className="border-indigo-300 shadow-xl bg-indigo-600 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Pronto para Explorar?</h2>
              <p className="text-lg mb-6">
                Acesse o NotebookLM e comece a fazer suas perguntas sobre os cases e 
                conteúdos das disciplinas Experience Accelerator.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a 
                  href="https://notebooklm.google.com/notebook/8f136821-fcc0-4149-a46f-8d5b50bca00b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" /> Acessar Ferramenta Gratuita
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-12">
          <p className="mb-2">
            <strong>Créditos:</strong> Executive MBA | FGV EAESP
          </p>
          <p className="text-sm">
            Inspirado pelo trabalho de Luiz Fernando Toledo | <a href="https://datafixers.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Datafixers.org</a>
          </p>
          <p className="text-sm mt-2">
            <strong>Metodologia:</strong> Este notebook foi alimentado com materiais acadêmicos, 
            cases e documentos das disciplinas Experience Accelerator I, II e III, 
            ministradas na FGV EAESP.
          </p>
        </footer>
      </div>
    </div>
  );
}

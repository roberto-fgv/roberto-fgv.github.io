# Experience Accelerator Notebook

## Sobre o Projeto

Este projeto adiciona uma página dedicada ao NotebookLM sobre as disciplinas Experience Accelerator I, II e III, ministradas na FGV EAESP.

## Link do NotebookLM

🔗 [Acesse o NotebookLM](https://notebooklm.google.com/notebook/8f136821-fcc0-4149-a46f-8d5b50bca00b)

## Estrutura do Projeto

### Páginas Criadas

1. **HomePage** (`src/HomePage.js`)
   - Página principal com informações sobre Roberto dos Santos Rocha
   - Inclui um card destacado com link para o Experience Accelerator Notebook

2. **ExperienceAcceleratorNotebook** (`src/ExperienceAcceleratorNotebook.js`)
   - Página dedicada ao NotebookLM
   - Explica o funcionamento da ferramenta
   - Fornece exemplos de perguntas
   - Inclui informações sobre as disciplinas

### Roteamento

O projeto utiliza `react-router-dom` para navegação entre páginas:
- `/` - Página principal (HomePage)
- `/experience-accelerator-notebook` - Página do NotebookLM

## Conteúdo do NotebookLM

O NotebookLM foi alimentado com:
- Cases práticos das disciplinas
- Apresentações e slides
- Artigos acadêmicos
- Materiais sobre metodologias (Design Thinking, Agile, etc.)
- Frameworks de experiência do cliente
- Exemplos de transformação digital

## Como Funciona

### 1. Base de Conhecimento
O Google NotebookLM foi alimentado com documentos e materiais das disciplinas Experience Accelerator I, II e III.

### 2. Faça uma Pergunta
Os usuários podem fazer perguntas naturais sobre os conteúdos das disciplinas.

### 3. Revise as Fontes
Cada resposta vem com referências clicáveis aos documentos originais.

### 4. Atenção
As respostas são baseadas exclusivamente nos materiais fornecidos ao notebook.

## Exemplos de Perguntas

- "Quais são as principais metodologias de design thinking abordadas no Experience Accelerator I?"
- "Me mostre exemplos de cases sobre transformação digital e experiência do cliente estudados nas disciplinas."
- "Como aplicar o framework de jornada do cliente em projetos de experiência? Há exemplos práticos?"

## Inspiração

Este projeto foi inspirado pelo trabalho de Luiz Fernando Toledo no [Datafixers.org](https://datafixers.org/l-ai-notebook.html), que criou um NotebookLM para facilitar o acesso a informações públicas através da Lei de Acesso à Informação (LAI).

## Tecnologias Utilizadas

- React 19.2.0
- React Router DOM
- Tailwind CSS
- Lucide React (ícones)
- Google NotebookLM

## Estrutura de Componentes

```
src/
├── App.js                              # Roteamento principal
├── HomePage.js                         # Página inicial
├── ExperienceAcceleratorNotebook.js    # Página do NotebookLM
└── components/
    └── ui/
        ├── button.jsx                  # Componente de botão
        └── card.jsx                    # Componente de card
```

## Deployment

O site é hospedado no GitHub Pages com domínio customizado `roberto-rocha.tech`.

Para fazer deploy:
```bash
npm run deploy
```

O comando `predeploy` executará automaticamente o build antes do deploy.

### URLs do Site:
- **Produção:** https://roberto-rocha.tech
- **Página Principal:** https://roberto-rocha.tech/
- **NotebookLM:** https://roberto-rocha.tech/experience-accelerator-notebook

## Autor

**Roberto dos Santos Rocha**
- Email: rsantos.rocha@gmail.com
- LinkedIn: [linkedin.com/in/rsrocha](https://www.linkedin.com/in/rsrocha)
- GitHub: [roberto-fgv](https://github.com/roberto-fgv)

## Instituição

FGV EAESP - Fundação Getulio Vargas - Escola de Administração de Empresas de São Paulo

## Licença

© 2025 Roberto dos Santos Rocha

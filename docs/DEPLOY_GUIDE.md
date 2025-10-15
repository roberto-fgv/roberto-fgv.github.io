# Guia de Deploy - roberto-rocha.tech

## 🌐 Informações do Site

- **Domínio:** https://roberto-rocha.tech
- **Repositório:** roberto-fgv/roberto-fgv.github.io
- **Branch de Deploy:** gh-pages
- **Hosting:** GitHub Pages com domínio customizado

## 📋 Pré-requisitos

1. Git configurado e autenticado
2. Node.js e npm instalados
3. Acesso ao repositório GitHub

## 🚀 Como Fazer Deploy

### Método 1: Deploy Automático (Recomendado)

Execute o comando:

```bash
npm run deploy
```

Este comando irá:
1. Executar `npm run build` automaticamente (via `predeploy`)
2. Criar a pasta `build` com os arquivos otimizados
3. Fazer push da pasta `build` para a branch `gh-pages`
4. O GitHub Pages irá servir o site automaticamente

### Método 2: Deploy Manual

Se preferir fazer manualmente:

```bash
# 1. Build do projeto
npm run build

# 2. Deploy para gh-pages
npx gh-pages -d build
```

## 🔍 Verificação Pós-Deploy

Após o deploy:

1. Aguarde 1-2 minutos para o GitHub Pages processar
2. Acesse: https://roberto-rocha.tech
3. Verifique as rotas:
   - https://roberto-rocha.tech/ (HomePage)
   - https://roberto-rocha.tech/experience-accelerator-notebook (NotebookLM)

## 🛠️ Configurações Importantes

### Arquivo CNAME

O arquivo `public/CNAME` contém o domínio customizado:
```
roberto-rocha.tech
```

**IMPORTANTE:** Não remova este arquivo! Ele é copiado para o build e garante que o GitHub Pages use o domínio correto.

### Configuração DNS

No seu provedor de domínio, configure:

**Opção A - CNAME Record (Recomendado):**
```
CNAME: roberto-rocha.tech -> roberto-fgv.github.io
```

**Opção B - A Records:**
```
A: roberto-rocha.tech -> 185.199.108.153
A: roberto-rocha.tech -> 185.199.109.153
A: roberto-rocha.tech -> 185.199.110.153
A: roberto-rocha.tech -> 185.199.111.153
```

### React Router + GitHub Pages

O projeto usa uma solução para fazer o React Router funcionar corretamente com GitHub Pages:

1. **404.html** - Redireciona rotas não encontradas para o index.html
2. **index.html** - Script que restaura a URL correta após o redirecionamento

Isso garante que URLs como `/experience-accelerator-notebook` funcionem quando acessadas diretamente.

## 📝 Workflow de Desenvolvimento

1. **Desenvolvimento Local:**
   ```bash
   npm start
   # Acesse: http://localhost:3000
   ```

2. **Teste o Build Localmente:**
   ```bash
   npm run build
   npx serve -s build
   # Acesse: http://localhost:3000
   ```

3. **Deploy para Produção:**
   ```bash
   npm run deploy
   ```

4. **Commit e Push do Código Fonte:**
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push origin main
   ```

## ⚠️ Troubleshooting

### Problema: CSS não carrega

**Solução:**
- Verifique se `tailwind.config.js` existe na raiz
- Execute `npm run deploy` novamente

### Problema: Rotas não funcionam

**Solução:**
- Verifique se `public/404.html` existe
- Verifique se o script no `public/index.html` está presente
- Aguarde alguns minutos após o deploy

### Problema: Domínio não funciona

**Solução:**
- Verifique se `public/CNAME` contém `roberto-rocha.tech`
- Verifique as configurações DNS no provedor de domínio
- No GitHub: Settings > Pages > verifique se o domínio está configurado

### Problema: Deploy falha

**Solução:**
```bash
# Limpe o cache do gh-pages
rm -rf node_modules/.cache/gh-pages

# Tente novamente
npm run deploy
```

## 📦 Estrutura de Branches

- **main** - Código fonte (desenvolvimento)
- **gh-pages** - Build pronto para produção (gerado automaticamente)

**Não edite a branch gh-pages manualmente!** Ela é sobrescrita a cada deploy.

## 🔐 GitHub Pages Settings

No repositório GitHub:
1. Vá em **Settings** > **Pages**
2. Verifique:
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Custom domain: roberto-rocha.tech
   - Enforce HTTPS: ✓ Enabled

## 📊 Checklist de Deploy

- [ ] Código testado localmente (`npm start`)
- [ ] Build testado localmente (`npm run build`)
- [ ] Sem erros no console
- [ ] Tailwind CSS funcionando
- [ ] Rotas funcionando corretamente
- [ ] Links externos funcionando
- [ ] Commit do código fonte no Git
- [ ] Deploy executado (`npm run deploy`)
- [ ] Site verificado em produção
- [ ] Testes em diferentes dispositivos/navegadores

## 🎯 URLs Importantes

- **Site Produção:** https://roberto-rocha.tech
- **Repositório:** https://github.com/roberto-fgv/roberto-fgv.github.io
- **GitHub Pages Settings:** https://github.com/roberto-fgv/roberto-fgv.github.io/settings/pages
- **NotebookLM:** https://notebooklm.google.com/notebook/8f136821-fcc0-4149-a46f-8d5b50bca00b

## 📞 Suporte

Em caso de dúvidas ou problemas:
- Verifique este guia
- Consulte a documentação do GitHub Pages
- Verifique os logs de deploy no terminal

---

**Última atualização:** Outubro 2025
**Autor:** Roberto dos Santos Rocha

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

### Método 1: Deploy Automático via GitHub Actions (Recomendado) ⭐

**O deploy agora é completamente automático!** Basta fazer commit e push das suas alterações:

```bash
# 1. Faça suas alterações nos arquivos
# 2. Adicione os arquivos alterados
git add .

# 3. Faça o commit
git commit -m "Descrição das suas mudanças"

# 4. Envie para o GitHub
git push origin main
```

**O que acontece automaticamente:**
1. ✅ GitHub Actions detecta o push na branch `main`
2. ✅ Instala as dependências do projeto
3. ✅ Executa `npm run build` para criar os arquivos otimizados
4. ✅ Faz deploy automático para a branch `gh-pages`
5. ✅ Site atualizado em https://roberto-rocha.tech em ~2 minutos

**Monitorando o Deploy:**
- Acesse: https://github.com/roberto-fgv/roberto-fgv.github.io/actions
- Visualize o progresso do workflow "Deploy to GitHub Pages"
- Badge de status no README indica se o último deploy foi bem-sucedido

### Método 2: Deploy Manual via npm

Se preferir fazer deploy manualmente (requer autenticação GitHub):

```bash
npm run deploy
```

Este comando irá:
1. Executar `npm run build` automaticamente (via `predeploy`)
2. Criar a pasta `build` com os arquivos otimizados
3. Fazer push da pasta `build` para a branch `gh-pages`
4. O GitHub Pages irá servir o site automaticamente

### Método 3: Deploy Totalmente Manual

Se preferir fazer manualmente passo a passo:

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

### Novo Workflow Automático (Recomendado)

1. **Desenvolvimento Local:**
   ```bash
   npm start
   # Acesse: http://localhost:3000
   ```

2. **Teste o Build Localmente (Opcional):**
   ```bash
   npm run build
   npx serve -s build
   # Acesse: http://localhost:3000
   ```

3. **Commit e Push - Deploy Automático:**
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push origin main
   # O GitHub Actions automaticamente faz build e deploy! 🚀
   ```

4. **Monitore o Deploy:**
   - Acesse: https://github.com/roberto-fgv/roberto-fgv.github.io/actions
   - Aguarde ~2 minutos
   - Verifique: https://roberto-rocha.tech

### Workflow Manual (Alternativo)

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

3. **Deploy Direto para GitHub Pages:**
   ```bash
   npm run deploy
   ```

4. **Commit do Código Fonte:**
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push origin main
   ```

## ⚠️ Troubleshooting

### Problema: Mudanças não aparecem no site

**Causa:** As mudanças foram commitadas mas não foram deployadas.

**Solução com GitHub Actions (Automático):**
1. Verifique se você fez push para a branch `main`:
   ```bash
   git push origin main
   ```
2. Acesse: https://github.com/roberto-fgv/roberto-fgv.github.io/actions
3. Verifique se o workflow "Deploy to GitHub Pages" está rodando ou foi concluído
4. Se houver erro, clique no workflow para ver os logs
5. Aguarde 2-3 minutos após o workflow completar
6. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)

**Solução Manual (se GitHub Actions não estiver disponível):**
```bash
npm run deploy
```

### Problema: GitHub Actions workflow falhou

**Solução:**
1. Acesse: https://github.com/roberto-fgv/roberto-fgv.github.io/actions
2. Clique no workflow que falhou
3. Verifique os logs de erro
4. Corrija o problema no código
5. Faça commit e push novamente

### Problema: CSS não carrega

**Solução:**
- Verifique se `tailwind.config.js` existe na raiz
- Aguarde o GitHub Actions completar o deploy
- Limpe o cache do navegador

### Problema: Rotas não funcionam

**Solução:**
- Verifique se `public/404.html` existe
- Verifique se o script no `public/index.html` está presente
- Aguarde alguns minutos após o deploy
- Limpe o cache do navegador

### Problema: Domínio não funciona

**Solução:**
- Verifique se `public/CNAME` contém `roberto-rocha.tech`
- Verifique as configurações DNS no provedor de domínio
- No GitHub: Settings > Pages > verifique se o domínio está configurado
- O arquivo CNAME é automaticamente incluído no deploy via GitHub Actions

### Problema: Deploy manual falha

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

### Deploy Automático (GitHub Actions)

- [ ] Código testado localmente (`npm start`)
- [ ] Build testado localmente (opcional: `npm run build`)
- [ ] Sem erros no console
- [ ] Tailwind CSS funcionando
- [ ] Rotas funcionando corretamente
- [ ] Links externos funcionando
- [ ] Código commitado (`git add .` + `git commit -m "..."`)
- [ ] Push para main (`git push origin main`)
- [ ] GitHub Actions workflow executado com sucesso
- [ ] Site verificado em produção (aguarde 2-3 minutos)
- [ ] Cache do navegador limpo (Ctrl+Shift+R)
- [ ] Testes em diferentes dispositivos/navegadores

### Deploy Manual (Alternativo)

- [ ] Código testado localmente (`npm start`)
- [ ] Build testado localmente (`npm run build`)
- [ ] Sem erros no console
- [ ] Tailwind CSS funcionando
- [ ] Rotas funcionando corretamente
- [ ] Links externos funcionando
- [ ] Deploy executado (`npm run deploy`)
- [ ] Commit do código fonte (`git add .` + `git commit`)
- [ ] Push para main (`git push origin main`)
- [ ] Site verificado em produção
- [ ] Testes em diferentes dispositivos/navegadores

## 🎯 URLs Importantes

- **Site Produção:** https://roberto-rocha.tech
- **Repositório:** https://github.com/roberto-fgv/roberto-fgv.github.io
- **GitHub Actions:** https://github.com/roberto-fgv/roberto-fgv.github.io/actions
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

# BlackMist Socorro Mecânico — site institucional

Next.js 16 (App Router), React, TypeScript e Tailwind CSS 4. Exportação 100% estática.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

Verificações: `npm run lint` e `npx tsc --noEmit`. Build de produção: `npm run build` (gera `out/`).
Para ver o build: `npx serve out`.

## Onde editar

- `src/config/business.ts`: nome, endereço, telefone/WhatsApp, serviços, localidades, mensagens de WhatsApp, redes sociais e fotos.
- `public/logo-blackmist.webp`: logo oficial (derivada de `logo-removebg-preview.png`, só com margens transparentes aparadas).
  As letras "BLACK" são pretas: use a logo apenas sobre fundos claros (header, menu e rodapé).
- Fotos: coloque em `public/images` e informe em `business.images` (hero, etc.). Sem foto, o site usa ilustração.
- `.env.example`: variáveis opcionais (WhatsApp, telefone, domínio).

## Publicar no GitHub + Cloudflare Pages

1. Criar o repositório e enviar o código (`.env.local`, `node_modules`, `.next` e `out` já estão no `.gitignore`):
   ```bash
   git init
   git add .
   git commit -m "Site BlackMist"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```
2. No Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configuração de build:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Variável de ambiente: `NODE_VERSION` = `22`
   - Opcional: `NEXT_PUBLIC_SITE_URL` = domínio definitivo (ex.: `https://www.seudominio.com.br`)
4. Depois do primeiro deploy, adicione o domínio em **Custom domains** e defina `NEXT_PUBLIC_SITE_URL`
   (isso ativa canonical, URLs absolutas no sitemap e nos dados estruturados). Faça um novo deploy após definir.

Os cabeçalhos de cache e segurança estão em `public/_headers`.

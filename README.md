# NorteHub Coworking

Site institucional responsivo para o NorteHub, coworking em Manaus. Construído com Next.js 16, React 19, TypeScript, App Router, Tailwind CSS 4, `next/image`, `next/font` e Lucide React.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para validar a versão de produção:

```bash
npm run lint
npm run typecheck
npm run build
```

## Onde editar

- Imagens: substitua os arquivos em `public/images/`, preservando os nomes e proporções aproximadas.
- Textos, planos, espaços, eventos e FAQ: `src/data/content.ts`.
- Telefone, WhatsApp, e-mail, redes sociais, endereço e horários: `src/data/site.ts`.
- Cores e tokens globais: `src/app/globals.css`.
- Cada seção: `src/components/sections/`.

As fotografias atuais são provisórias e locais. O endereço e os contatos também são dados editáveis e devem ser revisados antes da publicação.

## Deploy na Vercel

Envie o projeto para um repositório GitHub, importe-o na Vercel e mantenha as configurações detectadas para Next.js. Não são necessárias variáveis de ambiente. Antes de publicar, atualize `siteConfig.url`, contatos, endereço e fotografias.

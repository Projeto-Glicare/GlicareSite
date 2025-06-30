# Frontend Glicare Website

O Glicare é um aplicativo desenvolvido para simplificar o cuidado com o
diabetes. Pacientes, médicos, nutricionistas e outros profissionais de
saúde encontram aqui uma forma prática e acessível de acompanhar a
evolução da doença, monitorar sintomas e promover mais qualidade de
vida.

## Stack Utilizada

**Framework:** [Next.js](https://nextjs.org/)

**Linguagem:** [TypeScript](https://www.typescriptlang.org/)

**Estilização:** [Tailwind CSS](https://tailwindcss.com/)

**Dev Tools:**

- ESLint + eslint-config-next
- PostCSS
- TypeScript com tipagens de Node e React

## Funcionalidade

- Design responsivo para desktop, tablet e mobile
- Botões de ação para download do aplicativo
- Implementação do Google Analytics

## Git Flow

```plaintext
main    (protegida) - Código estável (produção)
dev     (protegida) - Integração contínua para testes
│
└── feature/*      - Branches temporárias para novas funcionalidades
└── hotfix/*       - Correções críticas para produção
```

## Commits semânticos

```plaintext
feat     → Nova funcionalidade
fix      → Correção de bug
docs     → Documentação
refactor → Refatoração sem mudança de comportamento
test     → Testes
chore    → Tarefas de manutenção
```

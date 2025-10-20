# 🧪 SWAGLABS-PLAYWRIGHT

💻 Projeto de estudo e fixação do Playwright, automatizando testes do site Swag Labs.
Inclui validações de login, produtos, carrinho, checkout e logout, utilizando Page Object Model (POM) e fixtures para dados consistentes.

# 📂 Estrutura do Projeto

SWAGLABS-PLAYWRIGHT
│
├── 📁 fixtures/                     → Dados estáticos usados nos testes
│   ├── users.json                  → Usuários (válido, bloqueado, inválido)
│   └── dataCheckout.json           → Dados do checkout (nome, sobrenome, CEP)
│
├── 📁 src/                          → Código principal (POM + helpers)
│   ├── pages/                      → Page Objects (interações com telas)
│   │   ├── 1LoginPage.ts
│   │   ├── 3CartPage.ts
│   │   └── 4CheckoutPage.ts
│   └── utils/
│       └── helpers.ts              → Funções auxiliares (ex: login direto)
│
├── 📁 tests/                        → Arquivos de teste (specs)
│   ├── 01login.spec.ts
│   ├── 02home.spec.ts
│   ├── 03cart.spec.ts
│   ├── 04checkout.spec.ts
│   └── 05logout.spec.ts
│
├── 📁 playwright-report/            → Relatórios automáticos do Playwright
├── 📁 test-results/                 → Resultados brutos dos testes
│
├── ⚙️ playwright.config.ts          → Configurações globais do Playwright
├── ⚙️ tsconfig.json                 → Configurações do TypeScript
├── 📦 package.json                  → Scripts e dependências do projeto
├── 📦 package-lock.json             → Controle exato das dependências
└── 🚫 .gitignore                     → Arquivos e pastas ignorados pelo Git

# 🛠 Tecnologias Utilizadas

🔹Playwright – Automação de testes end-to-end
🔹TypeScript – Tipagem estática
🔹Page Object Model (POM) – Organização de código por tela
🔹Fixtures – Dados estáticos para testes consistentes
🔹Badges – Visualização rápida do status e tecnologias


# 📌 Boas Práticas Aplicadas

🔸Estrutura de POM: testes limpos, legíveis e fáceis de escalar.
🔸Uso de fixtures para dados consistentes e manutenção simples.
🔸Testes independentes, que podem ser executados em qualquer ordem.
🔸Relatórios automáticos em playwright-report/ para análise rápida.


# 🎯 Objetivos do Projeto

🔹Fixar conceitos do Playwright: seletores, actions, fixtures, assertions e relatórios.
🔹Praticar boas práticas: organização de pastas, reuso de código, tipagem TypeScript.
🔹Criar um portfólio profissional de automação de testes end-to-end.
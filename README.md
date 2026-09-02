# mare.IA · AgroSUS — App do Agente (ACS)

Aplicativo React Native (Expo) para o fluxo de pareamento e coleta de dados do
programa AgroSUS, implementado 100% fiel ao wireframe de alta fidelidade
fornecido, incluindo cores, tipografia, espaçamentos e todos os componentes
visuais (toggles Sim/Não, tabelas de EPIs/sintomas/produtos, checklists,
barras de progresso, badges de risco, etc).

## Estrutura do projeto

```
mareia/
├── App.tsx                       # Entry point
├── app.json                      # Configuração do Expo
├── package.json
├── src/
│   ├── theme/                    # Design tokens
│   │   ├── colors.ts             # Paleta de cores (extraída do wireframe)
│   │   ├── spacing.ts            # Espaçamentos, raios, tamanhos
│   │   ├── typography.ts         # Estilos de texto
│   │   └── index.ts              # Barrel export
│   ├── components/                # Componentes reutilizáveis
│   │   ├── Logo.tsx
│   │   ├── AppHeader.tsx
│   │   ├── BottomTabBar.tsx
│   │   ├── Button.tsx
│   │   ├── TextField.tsx
│   │   ├── ToggleGroup.tsx        # Sim/Não e toggles de 2-3 opções
│   │   ├── Checkbox.tsx
│   │   ├── RadioCard.tsx
│   │   ├── DataTable.tsx          # Tabela genérica (produtos, etc.)
│   │   ├── ProgressSteps.tsx      # Barra "Etapa X de 9"
│   │   ├── StatusBadge.tsx        # Badges de risco (ALTO/MODERADO/BAIXO) + Pill
│   │   ├── AlertBanner.tsx        # Banners de alerta crítico
│   │   ├── Card.tsx
│   │   ├── ScreenContainer.tsx
│   │   └── FormStepLayout.tsx     # Layout padrão das 9 etapas do formulário
│   ├── context/
│   │   └── CollectionContext.tsx  # Estado global da coleta (todas as etapas)
│   ├── data/
│   │   └── mockData.ts            # Dados mockados (produtores, listas de opções)
│   ├── navigation/
│   │   ├── RootNavigator.tsx       # Login → MainTabs
│   │   ├── MainTabsNavigator.tsx   # Agenda / Produtores / Coleta / Alertas / Perfil
│   │   └── ColetaStackNavigator.tsx# As 19 telas do fluxo de coleta
│   └── screens/
│       ├── LoginScreen.tsx                    (01)
│       ├── DashboardScreen.tsx                 — Home / Agenda (22)
│       ├── ProdutoresScreen.tsx                (02)
│       ├── AlertasScreen.tsx
│       ├── PerfilScreen.tsx
│       └── coleta/
│           ├── TipoColetaScreen.tsx            (03)
│           ├── IdentificacaoScreen.tsx         (04)
│           ├── PropriedadeScreen.tsx           (05)
│           ├── CapacitacaoScreen.tsx           (06)
│           ├── DefensivosScreen.tsx            (07)
│           ├── RastreabilidadeScreen.tsx       (08)
│           ├── ExposicaoScreen.tsx             (09)
│           ├── EpisScreen.tsx                  (10)
│           ├── ArmazenamentoScreen.tsx         (11)
│           ├── ExposicaoFamiliarScreen.tsx     (12)
│           ├── SaudeSintomasScreen.tsx         (13)
│           ├── HistoricoIntoxicacaoScreen.tsx  (14)
│           ├── IndicadoresBoasPraticasScreen.tsx (15)
│           ├── ObservacoesAcsScreen.tsx        (16)
│           ├── ResumoScreen.tsx                (17)
│           ├── ResultadoAutomaticoScreen.tsx   (18)
│           ├── EncaminhamentoUbsScreen.tsx     (19)
│           ├── EncerramentoScreen.tsx          (20)
│           ├── ConfirmacaoEnvioScreen.tsx      (21)
│           └── DadosAutomaticosScreen.tsx      (23)
```

Os números entre parênteses correspondem às telas originais do wireframe de
alta fidelidade (Wireframe_Alta_Fidelidade_MareIA_AgroSUS).

## Como rodar

Pré-requisitos: Node.js 18+ e o app **Expo Go** no celular (ou emulador
Android/iOS configurado).

```bash
cd mareia
npm install
npx expo start
```

Depois é só escanear o QR Code com o Expo Go (Android) ou a Câmera (iOS).

Para rodar no navegador:

```bash
npx expo start --web
```

## Design tokens

Todas as cores, espaçamentos e tipografia usados no app vêm de
`src/theme/`. Isso significa que qualquer ajuste de marca (cor primária,
tamanhos de fonte, etc.) pode ser feito em um único lugar e se propaga para
o app inteiro — exatamente como pedido no requisito de negócio (uso dos
"design tokens oficiais: colors.ts, spacing.ts, typography.ts").

- **Cor primária (laranja mare.IA):** `#F4761F`
- **Onda da logo (azul):** `#6DC6DF`
- **Risco alto:** `#D44444` · **Moderado:** `#C88913` · **Baixo:** `#2E9D6D`
- **Texto principal:** `#132029`

## Fluxo de navegação

```
Login
 └─ MainTabs (bottom tab bar: Agenda · Produtores · Coleta · Alertas · Perfil)
     ├─ Agenda (Dashboard do ACS)
     ├─ Produtores (lista + busca por ID + "Novo Cadastro")
     ├─ Coleta (stack de 19 telas)
     │   TipoColeta → Identificação → Propriedade → Capacitação → Defensivos
     │   → Rastreabilidade → Exposição → EPIs → Armazenamento
     │   → Exp. familiar/ambiental → Saúde e sintomas → Histórico/vigilância
     │   → Boas práticas → Observações do ACS → Resumo/Revisão
     │   → Resultado automático → Encaminhamento UBS → Encerramento/assinaturas
     │   → Confirmação de envio
     ├─ Alertas
     └─ Perfil
```

O estado do formulário de 9 etapas (e das telas complementares de saúde,
histórico, boas práticas etc.) é mantido em `CollectionContext`, então o
agente pode navegar entre etapas sem perder o que já preencheu.

## Próximos passos sugeridos (fora do escopo deste protótipo)

- Persistência local (SQLite/AsyncStorage) para funcionamento 100% offline
  com fila de sincronização.
- Integração com API real do AgroSUS (score de exposição, encaminhamento,
  SINAN).
- Autenticação real (hoje o botão "Entrar" apenas navega para o app).
- Testes automatizados (Jest + Testing Library).

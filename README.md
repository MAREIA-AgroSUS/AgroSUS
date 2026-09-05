# mare.IA · AgroSUS — App do Agente (ACS)
## Como rodar

Pré-requisitos: Node.js 18+ e o app **Expo Go** no celular (ou emulador
Android/iOS configurado).

```bash
npm install
npx expo start
```

Depois é só escanear o QR Code com o Expo Go (Android) ou a Câmera (iOS).

Para rodar no navegador:

```bash
npx expo start --web
```
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



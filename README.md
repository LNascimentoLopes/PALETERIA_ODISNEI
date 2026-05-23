# 🏨 Hotel Elysian Grove – App Mobile

Aplicativo mobile em **React Native + Expo (TypeScript)** para o **Hotel Elysian Grove**.

---

## ⚙️ Instalação (passo a passo)

> ⚠️ Use **exatamente esta ordem** para evitar conflitos de versão.

### 1. Crie o projeto base
```bash
npx create-expo-app hotelElysianGrove --template blank-typescript
cd hotelElysianGrove
```

### 2. Copie todos os arquivos deste ZIP para dentro da pasta

### 3. Instale as dependências

O projeto já contém `.npmrc` com `legacy-peer-deps=true` para evitar conflitos.
Execute **um único comando**:

```bash
npm install
```

Se ainda ocorrer erro de peer deps, use:
```bash
npm install --legacy-peer-deps
```

### 4. Instale os módulos nativos via Expo CLI

```bash
npx expo install expo-font expo-video expo-camera expo-status-bar
```

### 5. Rode o projeto
```bash
npm start
# ou
npx expo start
```
Pressione **`a`** para Android ou **`i`** para iOS.

---

## 📁 Estrutura de Pastas

```
HotelElysianGrove/
├── assets/
├── src/
│   ├── componentes/
│   │   └── Texto.tsx              # Componente padrão (Montserrat, fontSize 16)
│   ├── mocks/
│   │   └── servicos.tsx           # 10 serviços do hotel (id, nome, descrição, imagem)
│   └── telas/
│       ├── Home/index.tsx         # Início: banner, sobre nós, vídeo tour em loop
│       ├── Servicos/
│       │   ├── index.tsx          # FlatList com Cards de serviços
│       │   └── Item.tsx           # Card individual + Modal de detalhes
│       ├── Perfil/index.tsx       # Câmera, TextInput, AsyncStorage
│       └── estiloGeral.tsx
├── .npmrc                         # legacy-peer-deps=true
├── App.tsx                        # Raiz: fontes Montserrat + Bottom Tabs
├── app.json                       # Splash #2A4F3D + plugins expo-camera/video
├── index.ts
├── package.json                   # Versões fixadas (mesmas do app25TA)
└── tsconfig.json
```

---

## 🎨 Paleta de Cores

| Elemento        | Cor       |
|-----------------|-----------|
| Verde principal | `#2A4F3D` |
| Dourado         | `#D4AF37` |
| Fundo creme     | `#FFF0DD` |
| Marrom texto    | `#8B6B4D` |

---

## 📚 Versões das Dependências

Fixadas para garantir compatibilidade (mesmas do repositório `app25TA`):

| Pacote                                  | Versão   |
|-----------------------------------------|----------|
| `expo`                                  | ~53.0.23 |
| `react-native`                          | 0.79.5   |
| `react`                                 | 19.0.0   |
| `react-native-screens`                  | 4.11.1   |
| `react-native-safe-area-context`        | 5.4.0    |
| `expo-font`                             | ~13.3.1  |
| `expo-video`                            | ~2.2.2   |
| `expo-camera`                           | ~16.1.11 |
| `@expo-google-fonts/montserrat`         | ^0.2.3   |
| `@react-native-async-storage/async-storage` | 2.1.2 |
| `@react-navigation/bottom-tabs`         | ^7.3.3   |
| `react-native-paper`                    | ^5.13.1  |

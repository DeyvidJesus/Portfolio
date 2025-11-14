# Toggle de Tema - Documentação

## 📋 Visão Geral

Um sistema completo de alternância entre temas claro e escuro foi implementado em sua aplicação portfolio. O sistema inclui:

- **Contexto Global (React Context)** para gerenciar o estado do tema
- **Hook Customizado** para acessar o tema em qualquer componente
- **Componente de Toggle** com ícones de sol e lua
- **Persistência de Dados** usando localStorage
- **Suporte a Preferências do Sistema** (prefers-color-scheme)
- **Estilos Tailwind** otimizados para ambos os temas

## 📁 Estrutura de Arquivos Criados

```
src/
├── contexts/
│   ├── themeContext.ts          # Contexto do tema
│   └── ThemeContext.tsx         # Provider do tema
├── hooks/
│   └── useTheme.ts              # Hook para acessar o tema
└── components/
    └── ThemeToggle.tsx          # Componente do botão de alternância
```

## 🚀 Como Funciona

### 1. **ThemeContext** (`contexts/themeContext.ts`)
Define o contexto e a interface para compartilhar o estado do tema globalmente:
- `theme`: 'light' | 'dark'
- `toggleTheme()`: função para alternar o tema

### 2. **ThemeProvider** (`contexts/ThemeContext.tsx`)
Componente que envolve a aplicação e gerencia:
- Estado do tema
- Persistência em localStorage
- Detecção de preferência do sistema
- Aplicação de classe 'dark' ao elemento html

### 3. **useTheme Hook** (`hooks/useTheme.ts`)
Hook customizado para acessar o tema em qualquer componente:
```tsx
const { theme, toggleTheme } = useTheme();
```

### 4. **ThemeToggle** (`components/ThemeToggle.tsx`)
Botão visual com:
- Ícone do sol (mostra quando está em tema escuro)
- Ícone da lua (mostra quando está em tema claro)
- Estilo consistente com o design da aplicação

## 🔧 Como Usar em Componentes

Para usar o tema em qualquer componente:

```tsx
import { useTheme } from '../hooks/useTheme';

export function MeuComponente() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={toggleTheme}>Alternar tema</button>
    </div>
  );
}
```

## 🎨 Classes Tailwind para Tema Claro/Escuro

Use `dark:` para estilos específicos do tema escuro:

```tsx
<div className="bg-white dark:bg-night text-slate-900 dark:text-white">
  Conteúdo que muda de cor com o tema
</div>
```

Exemplos usados na aplicação:
- `bg-white dark:bg-night` - Fundo
- `text-slate-900 dark:text-white` - Texto
- `border-slate-200 dark:border-white/5` - Bordas
- `bg-slate-50/90 dark:bg-charcoal/90` - Backgrounds semi-transparentes

## 💾 Persistência

O tema é automaticamente salvo em localStorage com a chave `'theme'`. Se o usuário não tiver uma preferência salva, a aplicação detecta a preferência do sistema usando `window.matchMedia('(prefers-color-scheme: dark)')`.

### Ordem de Prioridade:
1. Tema salvo no localStorage (se existir)
2. Preferência do sistema operacional
3. Padrão: tema escuro

## ⚡ Transições Suaves

As cores transitam suavemente entre temas com:
```css
transition-colors duration-300
```

Aplicado ao elemento raiz em `App.tsx`.

## 🔄 Mudanças Realizadas na Aplicação

### App.tsx
- Envolvido com `ThemeProvider`
- Adicionadas classes `dark:` para todos os elementos
- Transição de cores suave

### Header.tsx
- Importado `ThemeToggle`
- Adicionado botão de toggle no desktop
- Estilos atualizados para suportar ambos os temas

### tailwind.config.js
- Adicionado `darkMode: 'class'` para ativar modo escuro via classe

### global.css
- Estilos para tema claro e escuro
- Suporte a scrollbar em ambos os temas
- Gradientes otimizados para cada tema

## 📱 Responsividade

O toggle está visível apenas em resoluções desktop (md e acima). Em mobile, o menu responsivo pode ser expandido para incluir o toggle se necessário.

## 🎯 Próximos Passos (Opcional)

Se desejar expandir a funcionalidade:

1. **Adicionar toggle em mobile**: Incluir o `ThemeToggle` no menu responsivo
2. **Temas adicionais**: Adicionar tema intermediário ou customizável
3. **Animação ao trocar tema**: Adicionar efeito visual ao alternar
4. **Tema de sistema automático**: Sincronizar com mudanças do sistema

## 🚨 Notas Importantes

- O contexto foi dividido em 3 arquivos para evitar problemas de Fast Refresh do React
- O `ThemeProvider` deve envolver toda a aplicação no `App.tsx`
- O localStorage salva automaticamente a preferência do usuário
- As classes `dark:` do Tailwind funcionam apenas quando a classe 'dark' está aplicada ao elemento html

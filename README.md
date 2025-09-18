# 🚀 UI Components Library 
(React + TypeScript + TailwindCSS + Storybook)

This project is a **UI components library** built with **React, TypeScript, TailwindCSS, Vite, and Storybook**.  
It includes two reusable, accessible, and responsive components: **InputField** and **DataTable**.  

The goal of this project is to showcase modern **frontend development practices**, including:
- Strong typing with **TypeScript**
- Scalable **component-driven architecture**
- **Responsive design** with TailwindCSS
- **Accessibility** with ARIA support & semantic HTML
- Component **documentation & demos** with Storybook
- **Unit tests** with Jest + React Testing Library

---

## 📖 Overview of Components

### 1. InputField Component
A flexible input component designed for forms and user input.

**Features:**
- Label, placeholder, helper text, and error message
- States: `disabled`, `invalid`, `loading`
- Variants: `filled`, `outlined`, `ghost`
- Sizes: `sm`, `md`, `lg`
- Optional clear button and password toggle
- Light & dark theme support
- Accessible via `aria-invalid`, `aria-describedby`, and `htmlFor` label binding

**Props:**
```ts
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}
```

**Example Usage:**
```tsx
<InputField
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  errorMessage="Invalid email address"
  variant="outlined"
  size="md"
/>
```

---

### 2. DataTable Component
A reusable table for displaying structured data.

**Features:**
- Display tabular data with columns
- Column sorting (ascending/descending)
- Row selection (single/multiple)
- Loading and empty states
- Fully typed with TypeScript generics
- Responsive design with TailwindCSS
- Accessible with semantic HTML `<table>`

**Props:**
```ts
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}
```

**Example Usage:**
```tsx
<DataTable
  data={[
    { id: 1, name: "Atharv", role: "Developer" },
    { id: 2, name: "Riya", role: "Designer" }
  ]}
  columns={[
    { key: "1", title: "ID", dataIndex: "id", sortable: true },
    { key: "2", title: "Name", dataIndex: "name", sortable: true },
    { key: "3", title: "Role", dataIndex: "role" }
  ]}
  selectable
  onRowSelect={(rows) => console.log(rows)}
/>
```

---

## 🛠 Tech Stack
- ⚛️ **React** — UI framework  
- 🟦 **TypeScript** — strong typing  
- 🎨 **TailwindCSS** — styling & responsive design  
- ⚡ **Vite** — fast development/build tool  
- 📘 **Storybook** — component documentation  
- 🧪 **Jest + React Testing Library** — unit testing  

---

## 📂 Project Structure
```lua
ui-components-starter/
│── src/
│   ├── components/
│   │   ├── InputField/
│   │   │   ├── InputField.tsx
│   │   │   ├── InputField.stories.tsx
│   │   │   └── InputField.test.tsx
│   │   ├── DataTable/
│   │   │   ├── DataTable.tsx
│   │   │   ├── DataTable.stories.tsx
│   │   │   └── DataTable.test.tsx
│   ├── App.tsx
│   └── main.tsx
│── .storybook/           # Storybook config
│── package.json
│── vite.config.ts
│── tsconfig.json
│── tailwind.config.js
│── README.md
```

---

## 📦 Installation
Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd ui-components-starter
npm install
```

---

## ▶️ Running the Project
Start the development server:

```bash
npm run dev
```
👉 Open [http://localhost:5173](http://localhost:5173).

Run Storybook for component documentation:

```bash
npm run storybook
```
👉 Open [http://localhost:6006](http://localhost:6006).

---

## 🧪 Testing
Run tests:

```bash
npm run test
```

**Basic tests cover:**
- InputField renders labels, error messages  
- DataTable displays rows and supports selection  

---

## ✅ Requirements Met
✔ TypeScript with proper typing  
✔ Responsive design (TailwindCSS)  
✔ Accessibility (ARIA + semantic HTML)  
✔ Clean, modern styling  
✔ Basic unit tests included  
✔ Two working components  
✔ Example usage (App + Storybook)  
✔ Documentation (README + Storybook)  


# 🧪 QA-Playwright-Tests

Proyecto personal de pruebas automatizadas utilizando **Playwright** para complementar el stack de herramientas QA Automation.
Incluye tests básicos de verificación con `@playwright/test` y buenas prácticas de organización.

---

## 📁 Estructura del Proyecto

QA-Playwright-Tests/
  - node_modules/ # Dependencias del proyecto
  - tests/ # Carpeta principal con los tests activos
    - first_test.spec.js # Test básico de apertura de navegador
    - safe_test.spec.js # Test alternativo de búsqueda funcional

  - test-results/ # Reportes generados automáticamente
  - archive/ # Archivo histórico de pruebas descartadas
     - second_test.spec.js # Test original fallido (DuckDuckGo)
     - .gitkeep

  - package.json # Configuración del proyecto (npm)
  - package-lock.json # Detalles de versiones exactas
  - playwright.config.js # Configuración global de Playwright
  - .gitignore # Carpetas ignoradas en Git
  - README.md # Documentación principal del repositorio (ESP)
  - README_En.md # Documentación pricipal del repositorio en Inglés (ENG)

---

## 🧪 Tests Automatizados

### ✔️ Test 1 – Apertura de navegador
- Archivo: `first_test.spec.js`
- Acciones: Abre una página y verifica el título
- Resultado: ✅ exitoso

### ✔️ Test 2 – Búsqueda alternativa (test seguro)
- Archivo: `safe_test.spec.js`
- Acciones: Ingresa a una página y verifica contenido
- Resultado: ✅ exitoso

### 📦 Test archivado
- Archivo: `second_test.spec.js`
- Motivo: Test original fallido por restricciones de DuckDuckGo
- Acción: Se movió a `archive/` para mantener el historial limpio y organizado

---

## 🛠 Tecnologías utilizadas

- [Playwright](https://playwright.dev/)
- Node.js
- Git + GitHub
- Git Bash (CLI)
- Estructura modular con carpetas limpias

---

## 📁 Carpeta `archive/`

Incluye archivos de pruebas que fueron descartados o desactivados.
Se mantiene como historial técnico sin afectar la ejecución principal del proyecto.

---

## 🧠 Notas finales

- Proyecto utilizado como introducción práctica a Playwright
- Organización clara para facilitar futuras integraciones con CI/CD
- Ideal para sumar al portafolio y mostrar dominio multilenguaje en automatización

---

## 👨🏽‍🚀 Autor

**Luis Alejandro Ortiz** – QA Automation Engineer
📌 GitHub: [Lale11Ortiz](https://github.com/Lale11Ortiz)
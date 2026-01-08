# Proyecto Final - Backend III (CoderHouse)

API REST desarrollada en Node.js para gestión de productos y usuarios.
Incluye mocking de datos, logging, documentación con Swagger, testing automatizado
y dockerización completa del proyecto.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Docker & Docker Compose
- Swagger (OpenAPI)
- Mocha / Chai / Supertest
- Faker.js
- Winston (logging)

---

## 📦 Instalación y ejecución

### Opción 1: Con Docker (recomendado)

```bash
docker compose up --build


### Detener contenedores
docker compose down o ctrl + c


## La Api queda disponible en 
http://localhost:8080

## Opcion sin Docker 
npm install
npm run dev

## Documentacion Api
## Swgger disponible en 
http://localhost:8080/api/docs


## Testing
## Ejecutar Pruebas Automaticas
npm test

## Endpoint Principales
GET /api/products
POST /api/products
GET /api/products/mock
GET /api/products/performance
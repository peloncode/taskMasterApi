# 1. Imagen base de Node
FROM node:18-alpine

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código
COPY . .

# 6. Compilar TypeScript a JavaScript
RUN npm run build

# 7. Exponer el puerto que usa Cloud Run
EXPOSE 8080

# 8. Comando para arrancar la app
CMD ["node", "dist/app.js"]
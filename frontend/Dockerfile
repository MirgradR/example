#syntax=docker/dockerfile:1

# Стадия сборки
FROM node:20-alpine as builder

WORKDIR /app

# Скопировать файлы `package.json` и `package-lock.json` (или `yarn.lock`)
COPY package.json package-lock.json ./

# Установить зависимости
RUN npm ci

# Скопировать все файлы проекта в рабочую директорию
COPY . .

# Собрать приложение
RUN npm run build:prod

# Стадия запуска с Nginx
FROM nginx:stable-alpine

# Копировать собранные файлы в контейнер Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]

FROM node:22-alpine
ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY --chown=node:node server.js ./

USER node 

CMD ["node","server.js"]

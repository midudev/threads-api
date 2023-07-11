FROM oven/bun:0.6.13
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
EXPOSE 3000
ENTRYPOINT ["bun", "run", "src/api/index.ts"]

FROM node:20-alpine

# Install base deps
RUN apk add --no-cache \
  libc6-compat \
  python3 \
  make \
  g++ \
  git \
  py3-pip \
  build-base \
  cairo-dev \
  pango-dev \
  chromium \
  curl

# install pnpm globally
RUN npm install -g pnpm

# Puppeteer config
ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV NODE_OPTIONS=--max-old-space-size=8192

WORKDIR /usr/src

# Copy source
COPY . .

# Install deps
RUN pnpm install --no-frozen-lockfile

# Build app
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]

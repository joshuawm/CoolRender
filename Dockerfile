from ubuntu:18.04
RUN apt update -y && apt upgrade -y && apt install node -y
RUN npx corepack enable && 

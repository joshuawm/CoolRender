from ubuntu
ENV DEBIAN_FRONTEND=noninteractive
Run apt update -y && apt install git sudo curl tzdata -y
RUN curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash - && sudo apt-get install -y nodejs
RUN npx corepack enable
WORKDIR /root/
RUN git clone https://github.com/joshuawm/CoolRender.git
WORKDIR /root/CoolRender
RUN yarn && npx playwright install-deps webkit
CMD yarn run start

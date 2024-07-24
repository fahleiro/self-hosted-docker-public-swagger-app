FROM ubuntu:22.04


RUN apt-get update \

    && apt-get install -y curl npm nano \

    && apt-get clean \

    && rm -rf /var/lib/apt/lists/*


RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash \

    && export NVM_DIR="$HOME/.nvm" \

    && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" \

    && nvm install node \

    && npm install -g npm


RUN curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc \

    | tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null \

    && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" \

    | tee /etc/apt/sources.list.d/ngrok.list \

    && apt update \

    && apt install -y ngrok


COPY /swagger-app /swagger-app


RUN cd /swagger-app \

    && npm install


EXPOSE 25000


COPY ngrok.yml /ngrok/ngrok.yml


CMD /bin/bash -c "source $HOME/.nvm/nvm.sh && cd /swagger-app && npm start & ngrok start --config /ngrok/ngrok.yml --all"


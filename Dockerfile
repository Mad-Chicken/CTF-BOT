FROM node:14
EXPOSE 8123
WORKDIR /home/node/
RUN apt-get update && apt-get install -y ffmpeg

RUN npm init -y
RUN npm install discord.js@12.5.2
RUN npm install ffmpeg fluent-ffmpeg @discordjs/opus ytdl-core
# COPY spice_and_everything_nice /dev/null
COPY . .

CMD ["node","/home/node/index.js"]

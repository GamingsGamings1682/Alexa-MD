FROM quay.io/GamingsGamings1682/alexa:md
RUN git clone https://github.com/GamingsGamings1682/Alexa-MD /root/Alexa/
WORKDIR /root/Alexa/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]

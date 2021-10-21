FROM gitpod/workspace-full

# ENV  DEVELOPMENT=false
# ENV BITPATH=/bit-bin

#Install ssh and bit dependencies
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y vim nano openssh-server curl && mkdir /var/run/sshd && \
    apt-get install -y  apt-transport-https gcc make python g++ && \
    && sudo rm -rf /var/lib/apt/lists/*

# Use node 14
RUN NVM install 14 && \
  nvm use 14

# Setup Bit
RUN npm install --global @teambit/bvm && \
  bvm install && \
  ${HOME}/bin/bit config set analytics_reporting false && \
  ${HOME}/bin/bit config set error_reporting false && \
  ${HOME}/bin/bit config set no_warnings true

ENV PATH "${PATH}:${HOME}/bin"
FROM watheialabs/spectrum-env
# FROM gitpod/workspace-full
# #Install ssh and bit dependencies
# RUN sudo apt-get update && \
#     sudo apt-get dist-upgrade -y && \
#     sudo apt-get install -y vim nano openssh-server curl && \
#     sudo mkdir /var/run/sshd && \
#     sudo apt-get install -y  apt-transport-https gcc make python g++ && \
#     sudo rm -rf /var/lib/apt/lists/*

# # Use node 14 w/ nvm
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# RUN export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && \
#   printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" && \
#   [ -s "$NVM_DIR/nvm.sh" ] && \
#   \. "$NVM_DIR/nvm.sh" && \
#   nvm install 14 && \
#   nvm use 14 && \
#   echo 'nvm use 14' >> ${HOME}/.bashrc

# # Setup Bit
# RUN npm install --global npm yarn @teambit/bvm && \
#   bvm install && \
#   ${HOME}/bin/bit config set analytics_reporting false && \
#   ${HOME}/bin/bit config set error_reporting false && \
#   ${HOME}/bin/bit config set no_warnings true

# ENV PATH "${PATH}:${HOME}/bin"
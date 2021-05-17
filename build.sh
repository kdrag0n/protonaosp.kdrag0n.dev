#!/usr/bin/env bash

# Install dependencies
yarn install

# Build Docusaurus part
# Output is in build/
yarn build

# Build Vue.js web installer
# Output is in android-webinstall/dist
pushd android-webinstall
yarn install
# Production URL is hidden because it's embedded in a docs iframe
export BASE_URL=https://protonaosp.kdrag0n.dev/install/_web/
export VUE_APP_PROD_URL=https://protonaosp.kdrag0n.dev/install/_web/
yarn build
popd

# Combine built sites
mv android-webinstall/dist build/install/

# Deploy build/

#!/bin/bash
# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# run this script from the project root using `./website/build_python_docs.sh`

set -e

# Only supports mac and linux.
os="linux"
if [[ "$OSTYPE" == "darwin"* ]]; then
os="mac"
fi

VRS_DIR=$(realpath "$(pwd)")

echo "-----------------------------------"
echo "Generating API reference via Sphinx"
echo "-----------------------------------"

if [ -d "pyvrs" ]; then
    # OSS environment, install using pip
    PYVRS_DIR=$(realpath "${VRS_DIR}/pyvrs")
    SPHINXBUILD="sphinx-build"
    cd "${PYVRS_DIR}" || exit
    pip install -e .
else
    PYVRS_DIR=$(realpath "${VRS_DIR}/../../python/pyvrs2")
    SPHINXBUILD="buck run @arvr/mode/$os/opt //arvr/libraries/vrs/docs:sphinx-build --"
fi

cd "${VRS_DIR}/docs/pyvrs" || exit
rm -rf build
SPHINXBUILD="${SPHINXBUILD}" make html

echo "-----------------------------------"
echo "Getting Docusaurus deps"
echo "-----------------------------------"
cd "${VRS_DIR}/website" || exit
yarn

# run script to parse html generated by sphinx
echo "--------------------------------------------"
echo "Parsing Sphinx docs and moving to Docusaurus"
echo "--------------------------------------------"

rm -rf "${VRS_DIR}/website/static/python_api"
mkdir -p "${VRS_DIR}/website/static/python_api/"

cp -R "${VRS_DIR}/docs/pyvrs/build/html/." "${VRS_DIR}/website/static/python_api/"

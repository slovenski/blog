#!/usr/bin/env bash
set -e # halt script on error

zip -r static-site.zip public

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $NETLIFY_AUTH" \
     --data-binary "@static-site.zip" \
     https://api.netlify.com/api/v1/sites/$NETLIFY_ID/deploys

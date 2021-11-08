#! /bin/bash

echo "sync-to-s3.sh - - - - "

# Check if params are set
${AWS_ACCESS_KEY_ID?Required environment var AWS_ACCESS_KEY_ID not set}
${AWS_SECRET_ACCESS_KEY?Required environment var AWS_SECRET_ACCESS_KEY not set}
${AWS_DEFAULT_REGION?Required environment var AWS_DEFAULT_REGION not set}

# download awscli if not already
if [ -z `stat ./aws/dist/aws` ]; then
    echo "aws cli is not available, downloading one now"
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
fi

./aws/dist/aws s3 sync /usr/share/nginx/html s3://staging.mlmodelscope.org

if [ -n "$CLOUDFRONT_ID" ]; then
    ./aws/dist/aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --path "/*"
fi

echo "S3 Bucket has been updated."

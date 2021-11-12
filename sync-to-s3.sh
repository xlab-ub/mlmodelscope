#! /bin/sh

echo "sync-to-s3.sh - - - - "

# Check if params are set
if [ -z ${AWS_ACCESS_KEY_ID} ]; then echo "Required environment var AWS_ACCESS_KEY_ID not set"; exit 1; fi
if [ -z ${AWS_SECRET_ACCESS_KEY} ]; then echo "Required environment var AWS_SECRET_ACCESS_KEY not set"; exit 1; fi
if [ -z ${AWS_DEFAULT_REGION} ]; then echo "Required environment var AWS_DEFAULT_REGION not set"; exit 1; fi

# download awscli if not already
if [ -z `stat ./aws/dist/aws` ]; then
    echo "aws cli is not available, downloading one now"
    apt-get update && apt-get install awscli -y -qq
fi

aws s3 sync /usr/share/nginx/html s3://staging.mlmodelscope.org

if [ -n "$CLOUDFRONT_ID" ]; then
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --path "/*"
fi

echo "S3 Bucket has been updated."

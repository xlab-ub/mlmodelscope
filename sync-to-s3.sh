#! /bin/sh

echo "sync-to-s3.sh - - - - "

# Check if params are set
if [ -z ${AWS_ACCESS_KEY_ID} ]; then echo "Required environment var AWS_ACCESS_KEY_ID not set"; exit 1; fi
if [ -z ${AWS_SECRET_ACCESS_KEY} ]; then echo "Required environment var AWS_SECRET_ACCESS_KEY not set"; exit 1; fi
if [ -z ${AWS_DEFAULT_REGION} ]; then echo "Required environment var AWS_DEFAULT_REGION not set"; exit 1; fi
if [ -z ${S3_BUCKETNAME} ]; then echo "Required environment var S3_BUCKETNAME not set"; exit 1; fi

# download awscli if not already
if [ -z `stat ./aws/dist/aws` ]; then
    echo "aws cli is not available, apt-get installing one now"
    apt-get update > /dev/null && apt-get install awscli -y > /dev/null
    echo "got awscli."
fi


aws s3 sync /usr/share/nginx/html s3://${S3_BUCKETNAME}

if [ -n "$CLOUDFRONT_ID" ]; then
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --path "/*"
fi

echo "S3 Bucket has been updated."

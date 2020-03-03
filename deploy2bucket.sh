echo 'gsutil -h "Cache-Control:public,max-age=60" -m rsync -R firebase/public gs://owm-a7-fb-bucket'
gsutil -h "Cache-Control:public,max-age=60" -m rsync -R firebase/public gs://owm-a7-fb-bucket
echo 'executed: gsutil -h "Cache-Control:public,max-age=60" -m rsync -R firebase/public gs://owm-a7-fb-bucket'

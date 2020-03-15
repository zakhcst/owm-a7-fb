echo "Set base in dist firebase/public for bucket deployment"
echo "sed -i 's/base href=\"\//base href=\"https:\/\/storage.googleapis.com\/owm-a7-fb-bucket\//' firebase/public/index.html"
sed -i 's/base href=\"\//base href=\"storage.googleapis.com\/owm-a7-fb-bucket\//' src/index.html
node -e 'tmp=JSON.parse(process.argv[1]); tmp.projects["owm-a7-fb"].architect.build.configurations.production.baseHref="https://storage.googleapis.com/owm-a7-fb-bucket/"; console.log(JSON.stringify(tmp, null,  2));' "$(cat angular.json)" > angular.json

npm run build-prod

echo "Restore base in dist firebase/public for hosting"
sed -i 's/base href=\"storage.googleapis.com\/owm-a7-fb-bucket\//base href=\"\//' src/index.html
node -e 'tmp=JSON.parse(process.argv[1]); delete tmp.projects["owm-a7-fb"].architect.build.configurations.production.baseHref; console.log(JSON.stringify(tmp, null,  2));' "$(cat angular.json)" > angular.json

echo -n "Continue deployment?(y/N)"
read ans
if [[ ! "$ans" =~ (Y|y) ]]; then
    echo "Abort!"
    echo "Caution! Distribution index.html changed for bucket deployment!"
    exit 0
fi;


echo 'gsutil -h "Cache-Control:public,max-age=60" -m rsync -R firebase/public gs://owm-a7-fb-bucket'
gsutil -h "Cache-Control:public,max-age=60" -m rsync -R firebase/public gs://owm-a7-fb-bucket
echo 'executed: gsutil -h "Cache-Control:public,max-age=60" -m rsync -R firebase/public gs://owm-a7-fb-bucket'

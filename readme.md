# Threads API no oficial

<div align="center">
  <small>Para fines educativos</small>
</div>

## Primeras pruebas con Curl

```sh
curl 'https://www.threads.net/api/graphql' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' \
  -H 'x-ig-app-id: 238260118697367' \
  --data 'variables={ "userID": "8242141302" }' \
  --data doc_id=23996318473300828
```
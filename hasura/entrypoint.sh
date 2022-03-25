#!/bin/bash
graphql-engine serve & \
sleep 10000


curl 'http://localhost:8080/v1/metadata' \
  -H 'Connection: keep-alive' \
  -H 'sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"' \
  -H 'DNT: 1' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'content-type: application/json' \
  -H 'Accept: */*' \
  -H 'Origin: http://localhost:8080' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost:8080/console/data/default/schema/public' \
  -H 'Accept-Language: en' \
  -H 'Cookie: _xsrf=2|a6d1131f|2cdf65cabccabd2110fe2bd7a0dced84|1646956053' \
  --data-raw '{"type":"bulk","source":"default","resource_version":1,"args":[{"type":"pg_track_table","args":{"table":{"name":"test_table","schema":"public"},"source":"default"}}]}' \
  --compressed

tail -F /dev/null
generate_api_fetch:
	rm -rf ./types/api
	npx openapi-generator-cli generate -g typescript-fetch -i openapi.json -o ./types/api

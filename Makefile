run:
	npm run dev

prod:
	npm run build
	mkdir -p .next/standalone/.next/static
	mkdir -p .next/standalone/.next/static 
	cp -a .next/static/. .next/standalone/.next/static 
	cp -a public .next/standalone/public
	node .next/standalone/server.js

prod-clean:
	rm -rf .next
	make prod

docker:
	docker stop homepage || true
	docker rm homepage || true
	docker rmi homepage || true
	docker build . -t homepage
	docker run -d -p 3000:3000 --name homepage homepage

docker-compose:
	docker compose down
	docker compose up --build -d

# requires https://github.com/Wowu/docker-rollout/
docker-rollout:
	docker rollout -f docker-compose.yml homepage

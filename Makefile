run:
	npm run dev

prod:
	npm run build
	mkdir -p .next/standalone/.next/static
	mkdir -p .next/standalone/.next/static 
	cp -a .next/static/. .next/standalone/.next/static 
	cp -a public .next/standalone/public

docker:
	docker stop homepage || true
	docker rm homepage || true
	docker rmi homepage || true
	docker build . -t homepage
	docker run -p 3000:3000 --name homepage homepage

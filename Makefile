run:
	npm run dev

prod:
	npm run build
	mkdir -p .next/standalone/.next/static
	mkdir -p .next/standalone/.next/static 
	cp -a .next/static/. .next/standalone/.next/static 
	cp -a public .next/standalone/public

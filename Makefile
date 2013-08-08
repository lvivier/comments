build: components lib
	@component build --dev --use component-stylus

production: components lib
	@component build --use component-stylus

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean

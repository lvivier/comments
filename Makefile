build: components lib
	@component build --dev --use component-stylus,component-jade

production: components lib
	@component build --use component-stylus,component-jade

components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean

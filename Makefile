build: components lib
	@component build --dev

#templates = template/comment.js template/comments.js template/avatar.js

#template/%.js : template/%.html
#	@component convert $<

# components: $(templates) component.json
components: component.json
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean

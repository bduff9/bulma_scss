Thanks for helping out! 😇

### Raising an issue

* Make sure the issue hasn't been raised yet
* Include **screenshots** and animated GIFs in your issue whenever possible
* Tag your issue accordingly:
    * is it about **Bulma** or about the **Docs**?
    * is it a **Bug**, a **Feature**, a **Question**, or do you need **Help**?
    * if it's a bug, is it a **Browser Bug** (only happens in one browser)?

### Submitting a Pull Request

* Include **screenshots** and animated GIFs in your pull request whenever possible
* Use the **present** tense ("Add feature" not "Added feature")
* Use the **imperative** mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or fewer
* Reference issues and pull requests liberally

### Bulma Scss styleguide

* **No camelCase**
* Use only **classes**
* Order the CSS properties **alphabetically**
* Order the CSS rule by
  * direct styles
  * nested tags
  * pseudo-classes
  * color modifiers
  * size modifers
  * modifiers
  * responsive styles
* Add appropriate one-line comments for each of these sections within a CSS rule
* **No trailing space**
* End files with a **newline**

```scss
.element {
  @extend .something;

  @mixin somemixin() {
    property: value;
  }

  span {
    // ...
  }

  div {
    // ...
  }

  .child {
    // ...
  }

  &:pseudo-class {
    // ...
  }

```

# ModalController

- When a modal (or any other overlay such as an alert or actionsheet) is "presented" to a nav controller, the overlay is added to the app's root nav.
- After the modal has been presented, from within the component instance The modal can later be closed or "dismissed" by using the ViewController's `dismiss` method.
- Additionally, you can dismiss any overlay by using pop on the root nav controller.
- Modals are not reusable. When a modal is dismissed it is destroyed.

* Data can be passed to a new modal through Modal.create() as the second argument
* The data can then be accessed from the opened page by injecting NavParams.
* Note that the page, which opened as a modal, has no special "modal" logic within it, but uses NavParams no differently than a standard page.

```javascript
create(component, data, opts);
```

[see config](https://ionicframework.com/docs/api/components/modal/ModalController/#config)

[see option config](https://ionicframework.com/docs/api/components/modal/ModalController/#advanced)

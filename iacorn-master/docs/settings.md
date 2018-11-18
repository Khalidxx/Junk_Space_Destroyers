# Settings

```es6
// app/app.module.ts
import { Settings, User, Api } from '../providers';
...
export function provideSettings(storage: Storage) {
  return new Settings(storage, {
    option1: true,
    ...
  });
}
...
providers: [
  ...
  { provide: Settings, useFactory: provideSettings, deps: [Storage] },
  ...
];
```

## what to save in settings

* hasSeenTutorial
* 

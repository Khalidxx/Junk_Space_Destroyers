# AngularJS

## ngSwitch

```html
<div class="basicInfoBackground" [ngSwitch]="merchantDetail.isWorking">
    <div class="workingTime" *ngSwitchCase="true">
      {{'WORKING'|translate}}
      <ion-icon name="md-time"></ion-icon>
    </div>
    <div class="workingTimeRest" *ngSwitchCase="false">
      {{'REST'|translate}}
      <ion-icon name="md-time"></ion-icon>
    </div>
</div>
```

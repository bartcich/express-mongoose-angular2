import { MdButtonModule } from '@angular2-material/button/button';
import { MdCheckboxModule } from '@angular2-material/checkbox/checkbox';
import { MdRadioModule } from '@angular2-material/radio/radio';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list/list';
import { MdGridListModule } from '@angular2-material/grid-list/grid-list';
import { MdCardModule } from '@angular2-material/card/card';
import { MdIconModule } from '@angular2-material/icon/icon';
import { MdProgressCircleModule } from '@angular2-material/progress-circle/progress-circle';
import { MdProgressBarModule } from '@angular2-material/progress-bar/progress-bar';
import { MdInputModule } from '@angular2-material/input/input';
import { MdTabsModule } from '@angular2-material/tabs/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip/tooltip';
import { MdRippleModule } from '@angular2-material/core/ripple/ripple';
import { PortalModule } from '@angular2-material/core/portal/portal-directives';
import { OverlayModule } from '@angular2-material/core/overlay/overlay-directives';
import { MdMenuModule } from '@angular2-material/menu/menu';
/*
 * we are grouping the module so we only need to manage the imports in one location
 */


export const MATERIAL_MODULES = [
  ...[
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdRippleModule,
    MdSidenavModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
  ],
];

import {
    Directive,
    EventEmitter,
    HostListener,
    Output,
} from '@angular/core';

@Directive({
    selector: '[appArrowNav]',
})
export class ArrowNavDirective {
    @Output() navDown = new EventEmitter();
    @Output() navUp = new EventEmitter();
    @Output() navLeft = new EventEmitter();
    @Output() navRight = new EventEmitter();

    @HostListener('keydown', ['$event']) onKeyDown($event: KeyboardEvent) {
        this.getEventEmitter($event.code)?.emit();
    }

    private getEventEmitter(code: string) {
        switch (code) {
            case 'ArrowDown':
                return this.navDown;
            case 'ArrowUp':
                return this.navUp;
            case 'ArrowLeft':
                return this.navLeft;
            case 'ArrowRight':
                return this.navRight;
            default:
                return null;
        }
    }
}

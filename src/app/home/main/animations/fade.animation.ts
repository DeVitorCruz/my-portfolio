import { animate, style, state, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export function fade(): AnimationTriggerMetadata {
    return trigger(`fade`, [
        state('hidden', style({ opacity: 0 })),
        state('visible', style({ opacity: 1 })),
        transition('hidden => visible', [
            animate(`{{duration}}ms {{delay}}ms ease-out`)
        ], { params: { duration: 1200, delay: 0 } })
    ]);
}

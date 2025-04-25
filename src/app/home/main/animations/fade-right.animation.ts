import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export function fadeRight(): AnimationTriggerMetadata {
    return trigger(`fadeRight`, [
        state('hidden', style({ opacity: 0, transform: 'translateX(-100px)' })),
        state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('hidden => visible', [
            animate(`{{duration}}ms {{delay}}ms ease-out`)
        ], { params: { duration: 1200, delay: 0 } })
    ]);
}

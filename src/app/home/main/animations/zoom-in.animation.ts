import { animate, state, style, transition, trigger, AnimationTriggerMetadata } from '@angular/animations';

export function zoomIn(): AnimationTriggerMetadata {
    return trigger(`zoomIn`, [ 
        state('hidden', style({ opacity: 0, transform: 'scale(0.6)' })),
        state('visible', style({ opacity: 1, transform: 'scale(1.0)' })),
        transition('hidden => visible', [
            animate(`{{duration}}ms {{delay}}ms ease-out`)
        ], { params: { durantion: 1200, delay: 0 } })
    ]);
}

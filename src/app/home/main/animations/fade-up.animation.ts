import { trigger, state, transition, style, query, animate, animateChild, group, AnimationTriggerMetadata  } from '@angular/animations';

export function fadeUp(): AnimationTriggerMetadata {
    return trigger(`fadeUp`, [
        state('hidden', style({ opacity: 0, transform: 'translateY(100px)' })),
        state('visible', style({ opacity: 1, transform: 'translateY(0px)' })),
        transition('hidden => visible', [ 
            animate(`{{duration}}ms {{delay}}ms ease-out`),
            query('@zoomIn300', animateChild(), { optional: true }) 
        ], {params: { duration: 1200, delay: 0 }}),
    ]);
}


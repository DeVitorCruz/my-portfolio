import { InjectionToken } from "@angular/core";

export const WINDOW = new InjectionToken<Window | undefined>(
    'Global window object', 
    {   
        providedIn: 'root',
        factory: () => {
            if (typeof window !== undefined) {
                return window;
            } else {
                return undefined;
            }
        }
    }
);
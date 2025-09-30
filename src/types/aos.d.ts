declare module 'aos' {
  type AosEffect =
    | 'fade'
    | 'fade-up'
    | 'fade-down'
    | 'fade-left'
    | 'fade-right'
    | 'fade-up-right'
    | 'fade-up-left'
    | 'fade-down-right'
    | 'fade-down-left'
    | 'flip-up'
    | 'flip-down'
    | 'flip-left'
    | 'flip-right'
    | 'slide-up'
    | 'slide-down'
    | 'slide-left'
    | 'slide-right'
    | 'zoom-in'
    | 'zoom-in-up'
    | 'zoom-in-down'
    | 'zoom-in-left'
    | 'zoom-in-right'
    | 'zoom-out'
    | 'zoom-out-up'
    | 'zoom-out-down'
    | 'zoom-out-left'
    | 'zoom-out-right';

  type AosEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back' | 'ease-in-sine' | 'ease-out-sine' | 'ease-in-out-sine' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'ease-in-quart' | 'ease-out-quart' | 'ease-in-out-quart';

  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: AosEasing;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'center-bottom' | 'center-center' | 'center-top' | 'bottom-bottom' | 'bottom-center' | 'bottom-top';
  }

  interface AosEventTarget extends EventTarget {
    getAttribute(qualifiedName: string): string | null;
    setAttribute(qualifiedName: string, value: string): void;
  }

  interface Aos {
    /**
     * Initialize AOS
     */
    init(options?: {
      disable?: boolean | 'phone' | 'tablet' | 'mobile' | string;
      startEvent?: string;
      initClassName?: string;
      animatedClassName?: string;
      useClassNames?: boolean;
      disableMutationObserver?: boolean;
      debounceDelay?: number;
      throttleDelay?: number;
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: AosEasing;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }): void;

    /**
     * Refresh AOS
     */
    refresh(): void;

    /**
     * Refresh AOS
     */
    refreshHard(): void;
  }

  const AOS: Aos;
  export default AOS;
}

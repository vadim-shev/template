export const HAS_WINDOW_SUPPORT = typeof window !== 'underfined'
export const HAS_DOCUMENT_SUPPORT = typeof document !== 'underfined'
export const HAS_NAVIGATOR_SUPPORT = typeof navigator !== 'underfined'
export const HAS_PROMISE_SUPPORT = typeof Promise !== 'underfined'
export const HAS_MUTATION_OBSERVER_SUPPORT = typeof MutationObserver !== 'underfined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined'

export const IS_BROWSER = HAS_WINDOW_SUPPORT && HAS_DOCUMENT_SUPPORT && HAS_NAVIGATOR_SUPPORT

export const WINDOW = HAS_WINDOW_SUPPORT ? window : {}
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {}
export const NAVIGATOR = HAS_NAVIGATOR_SUPPORT ? navigator : {}
export const USER_AGENT = (NAVIGATOR.userAgent || '').toLowerCase()

export const IS_JSDOM = USER_AGENT.indexOf('jsdom') > 0
export const IS_IE = /msie|trident/.test(USER_AGENT)

export const HAS_PASSIVE_EVENT_SUPPORT = (() => {
    let passiveEventSupported = false
    if (IS_BROWSER) {
        try {
            const options = {
                get passive() {
                    passiveEventSupported = true
                }
            }
            WINDOW.addEventListener('test', options, options)
            WINDOW.removeEventListener('test', options, options)
        } catch {
            passiveEventSupported = false
        }
    }
    return passiveEventSupported
})()

export const HAS_TOUCH_SUPPORT = IS_BROWSER && ('ontouchstart' in DOCUMENT.documentElement || NAVIGATOR.maxTouchPoints > 0)
export const HAS_POINTER_EVENT_SUPPORT = IS_BROWSER && Boolean(WINDOW.PointerEvent || WINDOW.MSPointerEvent)
export const HAS_INTERACTION_OBSERVER_SUPPORT = IS_BROWSER && 'IntersectionObserver' in WINDOW && 'IntersectionObserverEntry' in WINDOW && 'intersectionRatio' in WINDOW.IntersectionObserverEntry.prototype

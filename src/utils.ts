/**
 * Attempt to execute a function and return its result. if it throws an error,
 * run a second function to get a fallback value.
 */
export const catchFallback = <T>(get: () => T, getFallback: () => T): T => {
	try {
		return get();
	} catch (e) {
		return getFallback();
	}
};

// common debounce function

/**
 * @param func - callback function
 * @param delay - setTimeout delay
 */

type IcallbackFunc = (...args: any[]) => any;
type Idebounce = (callback: IcallbackFunc, number: number) => (...args: Parameters<IcallbackFunc>) => void;

const debounce: Idebounce = (func, delay) => {
  let inDebounce: ReturnType<typeof setTimeout> | null = null;
  return (...args) => {
    if (inDebounce !== null) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;

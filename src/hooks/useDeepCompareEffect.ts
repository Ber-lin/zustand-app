import isEqual from "lodash/isEqual";
import {
  useEffect,
  type DependencyList,
  type EffectCallback,
  useRef,
} from "react";

const depsEqual = (aDeps: DependencyList, bDeps: DependencyList) => {
  return isEqual(aDeps, bDeps);
};
const useDeepCompareEffect = (effect: EffectCallback, deps: DependencyList) => {
  const ref = useRef<DependencyList>();
  const signalRef = useRef<number>(0);
  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }
  useEffect(effect, [signalRef.current]);
};
export default useDeepCompareEffect;

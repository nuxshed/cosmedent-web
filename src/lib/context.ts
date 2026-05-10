import { setContext, getContext } from 'svelte';

const KEY = Symbol('modal');

export interface ModalCtx {
  open(): void;
}

export const setmodal = (ctx: ModalCtx) => setContext(KEY, ctx);
export const getmodal = () => getContext<ModalCtx>(KEY);

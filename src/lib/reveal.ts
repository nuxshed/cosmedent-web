import type { Action } from 'svelte/action';

export const reveal: Action = (node) => {
  node.classList.add('reveal');
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('in');
        obs.unobserve(node);
      }
    },
    { threshold: 0.12 }
  );
  obs.observe(node);
  return { destroy: () => obs.disconnect() };
};

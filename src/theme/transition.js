export default {
  main: (duration = 600) =>
    `all ${duration}ms cubic-bezier(0.25, 0.45, 0.45, 0.95)`,

  leave: (duration = 400, delay = 0) =>
    `all ${duration}ms cubic-bezier(0.25, 0.45, 0.45, 0.95) ${delay}ms`
};

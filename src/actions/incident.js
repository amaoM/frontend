export const statusUp = id => ({
  type: 'STATUS_UP',
  id,
  status: 'up',
});

export const statusDown = id => ({
  type: 'STATUS_DOWN',
  id,
  status: 'down',
});

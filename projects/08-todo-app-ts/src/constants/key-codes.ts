interface KeyCode {
  which: number;
  key: string;
}
export const KEY_CODES: { [ key: string ]: KeyCode } = {
  ENTER: {
    which: 13,
    key: 'Enter'
  },
  ESCAPE: {
    which: 27,
    key: 'Escape'
  }
}
export type Color = 'inherit' | 'primary' | 'secondary' | 'default';
export type TextColor = 'primary' | 'secondary';
export interface Shortcut {
  name: string;
  key: string;
  handler: () => void;
}

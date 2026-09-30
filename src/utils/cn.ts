/**
 * Classnames Joiner Utility
 * Merges conditional class names cleanly without external dependencies.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

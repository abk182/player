export interface Props {
  style?: { [key: string]: string };
  className?: string;
}

export interface State {
  isPaused: boolean;
  isPending: boolean;
}

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export type Events = {
  [key: string]: (data: any) => void;
};

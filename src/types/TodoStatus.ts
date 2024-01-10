export const TodoStatus = {
  DONE: "done",
  UNDONE: "undone",
} as const;

export type TodoStatusType = (typeof TodoStatus)[keyof typeof TodoStatus];

export type TagType = "CONSTRUCTOR" | "STRING" | "OBJECT" | "NUMBER" | "BOOLEAN" | "METHOD" | "MEDIASTREAM" | "ERROR" | "FATAL" | "SOMETIMES_FATAL" | "EVENT" | "ANY" | "CLASS" | "UTILITY";

export const TagType: { [key in TagType ] : string} = {
  CONSTRUCTOR: "#468f81",
  STRING: "#757e2b",
  OBJECT: "#757e2b",
  NUMBER: "#757e2b",
  BOOLEAN: "#757e2b",
  METHOD: "#e2a62e",
  MEDIASTREAM: "#757e2b",
  ERROR: "#8f4537",
  FATAL: "#454545",
  SOMETIMES_FATAL: "#454545",
  EVENT: "#1295d8",
  ANY: "#757e2b",
  CLASS: "#468f81",
  UTILITY: "#468f81"
}

export interface DocEntry {
  name: string;
  tags: TagType[];
  example?: string;
  description?: string;
  children?: DocEntry[];
  warning?: string;
  note?: string;
}
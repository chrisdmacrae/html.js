export enum PartType {
  "ELEMENT",
  "ATTRIBUTE",
  "TEXT",
  "CDATA_SECTION",
  "PROCESSING_INSTRUCTION",
  "COMMENT",
  "DOCUMENT",
  "DOCUMENT_TYPE",
  "DOCUMENT_FRAGMENT"
}

export interface Part {
  readonly value: unknown;
  readonly expression: unknown;
  readonly type: PartType;

  /**
   * Gets the current value of the part
   */
  get(): void;

  /**
   * Sets the current value of the part
   *
   * @param value The new value for the part
   */
  set(value: unknown): any;

  /**
   * Updates the value of the part, notifying DSLs that the value should
   * be updated
   */
  update(): void;
}

export interface PartConstructor {
  new (expression: any): Part;
}

export function createPart(ctor: PartConstructor, expression: any): Part {
  return new ctor(expression);
}

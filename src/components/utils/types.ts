// define custom event type for upload file
type EventTemp = Omit<Event, 'target'>;

export interface CustomEventInput<T = EventTarget> extends EventTemp {
  readonly target: T | null;
}

export interface UploadFilesEventTarget extends EventTarget {
  files: File[];
}

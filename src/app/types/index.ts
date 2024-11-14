export interface Email {
  id: string;
  threadId: string;
  subject: string;
  sender: string;
  date: string;
  body: string;
  labelIds: string[];
  analysis?: {
    priority: number;
    actions: string[];
    suggestedResponse?: string;
    keyPoints: string[];
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  picture?: string;
}